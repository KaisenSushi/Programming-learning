import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const mode = process.argv[2] || '--content'
const root = process.cwd()
const website = path.join(root, 'website')
const html = read('website/index.html')
const app = read('website/assets/app.js')
const css = read('website/assets/styles.css')
const errors = []
const moduleNames = [
  '00-getting-started',
  '01-python',
  '02-git-github',
  '03-problem-solving',
  '04-data-structures',
  '05-algorithms',
  '06-testing-debugging',
  '07-sql-databases',
  '08-c',
  '09-computer-architecture'
]

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function expect(value, message) {
  if (!value) errors.push(message)
}

function walk(directory) {
  const files = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

function checkContent() {
  for (const file of ['index.html', '404.html', 'assets/styles.css', 'assets/app.js', 'assets/og.png']) {
    expect(fs.existsSync(path.join(website, file)), `website is missing ${file}`)
  }

  for (const moduleName of moduleNames) {
    expect(html.includes(`/tree/course/complete-curriculum/${moduleName}`), `website is missing the ${moduleName} module link`)

    const lessons = fs.readdirSync(path.join(root, moduleName)).filter(name => /^\d\d-.*\.md$/.test(name))
    expect(lessons.length === 3, `${moduleName} should have three numbered lessons`)

    for (const lesson of lessons) {
      expect(html.includes(`/${moduleName}/${lesson}`), `website is missing ${moduleName}/${lesson}`)
    }

    for (const extra of ['exercises.md', 'quiz.md', 'project.md', 'solutions.md']) {
      expect(fs.existsSync(path.join(root, moduleName, extra)), `${moduleName} is missing ${extra}`)
      expect(html.includes(`/${moduleName}/${extra}`), `website is missing ${moduleName}/${extra}`)
    }
  }

  expect((html.match(/<section class="module"/g) || []).length === 10, 'website should show exactly ten modules')
  expect((html.match(/class="lesson-link"/g) || []).length === 30, 'website should show exactly thirty lesson links')
  expect(html.includes('10 modules') && html.includes('30 lessons') && html.includes('10 projects'), 'course totals are missing')

  const localAssets = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)]
    .map(match => match[1])
    .filter(target => !/^(?:https?:|mailto:)/.test(target))

  for (const target of localAssets) {
    const resolved = path.resolve(website, target.split('?')[0])
    expect(fs.existsSync(resolved), `index.html has a broken local link ${target}`)
  }

  const image = fs.readFileSync(path.join(website, 'assets/og.png'))
  expect(image.subarray(1, 4).toString('ascii') === 'PNG', 'social card is not a PNG')
  expect(image.readUInt32BE(16) >= 1200 && image.readUInt32BE(20) >= 600, 'social card is too small')

  const workflow = read('.github/workflows/pages.yml')
  const hosting = JSON.parse(read('.openai/hosting.json'))
  expect(workflow.includes('path: website'), 'Pages workflow should publish the website folder')
  expect(hosting.static?.directory === 'dist', 'Sites hosting should publish the dist folder')

  const syntax = spawnSync(process.execPath, ['--check', 'website/assets/app.js'], { encoding: 'utf8' })
  expect(syntax.status === 0, `website JavaScript has a syntax error ${syntax.stderr}`)
}

function checkDesign() {
  const notFound = read('website/404.html')
  const requiredHtml = ['class="repo-path"', 'class="page-shell"', 'class="sidebar"', 'class="markdown-body"']
  for (const token of requiredHtml) expect(html.includes(token), `minimal layout is missing ${token}`)

  const requiredCss = ['--bg: #0d1117', '--header: #010409', '--surface: #161b22', '--border: #30363d', '--link: #4493f8']
  for (const token of requiredCss) expect(css.includes(token), `GitHub palette is missing ${token}`)

  const forbiddenHtml = ['brand-mark', 'hero', 'next-card', 'path-card', 'progress-bar', 'course-search', 'module-template']
  for (const token of forbiddenHtml) expect(!html.includes(token), `rejected app-like part remains ${token}`)

  const forbiddenCss = ['linear-gradient', 'radial-gradient', 'box-shadow', 'backdrop-filter', '.hero', '.next-card', '.path-card', '.module-card']
  for (const token of forbiddenCss) expect(!css.includes(token), `rejected visual style remains ${token}`)

  expect(!/<span[^>]*class="[^" ]*(?:icon|mark)[^" ]*"/i.test(html), 'website still uses a logo or icon tile')
  expect(!/<button[^>]*data-mode=/i.test(html), 'learning paths should be plain text instead of app controls')
  expect(notFound.includes('assets/styles.css'), '404 page should use the same simple site style')
  expect(!notFound.includes('<style>'), '404 page should not keep a separate app-like design')
}

function checkFeatures() {
  const requiredHtml = [
    'id="for-beginners"',
    'id="for-advanced"',
    'id="setup"',
    'id="copy-setup"',
    'id="study"',
    'class="skip-link"',
    'aria-live="polite"'
  ]
  for (const token of requiredHtml) expect(html.includes(token), `website is missing ${token}`)

  expect(app.includes('navigator.clipboard.writeText'), 'setup copy button is not connected')
  expect(app.includes("querySelector('#copy-setup')"), 'setup copy button lookup is missing')

  const requiredCss = ['@media (max-width: 760px)', '@media (max-width: 480px)', '@media (prefers-reduced-motion: reduce)', ':focus-visible', 'min-height: 44px']
  for (const token of requiredCss) expect(css.includes(token), `website style is missing ${token}`)

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
  expect(new Set(ids).size === ids.length, 'index.html contains duplicate ids')
  expect(!/<button(?![^>]*\stype="button")/i.test(html), 'every button should state type="button"')
  expect(!/https:\/\/(?:fonts\.googleapis|cdn\.|unpkg|jsdelivr)/i.test(html), 'website should not need third party page assets')
}

function checkWriting() {
  const publicFiles = [
    path.join(root, 'README.md'),
    path.join(root, 'ROADMAP.md'),
    path.join(root, 'STYLE_GUIDE.md'),
    ...walk(website).filter(file => /\.(?:html|css|js)$/i.test(file))
  ]
  const emDash = /\u2014/
  const emoji = /\p{Extended_Pictographic}/u

  expect(emDash.test('bad\u2014dash'), 'em dash checker positive control failed')
  expect(emoji.test('bad \u{1F600} symbol'), 'emoji checker positive control failed')

  for (const file of publicFiles) {
    const text = fs.readFileSync(file, 'utf8')
    const relative = path.relative(root, file)
    expect(!emDash.test(text), `${relative} contains an em dash`)
    expect(!emoji.test(text), `${relative} contains an emoji or pictograph`)
  }

  for (const phrase of ['without getting lost', 'start learning', 'your next step', 'One course two ways', 'built for anyone', 'Elevate your', 'Seamless', 'Powerful']) {
    expect(!html.toLowerCase().includes(phrase.toLowerCase()), `generic landing page phrase remains ${phrase}`)
  }

  expect(html.includes('If you are new') && html.includes('If you know some code'), 'plain learning path wording is missing')
  expect(html.includes('read one small part') && html.includes('run it again'), 'simple study wording is missing')
}

if (mode === '--content') checkContent()
else if (mode === '--design') checkDesign()
else if (mode === '--features') checkFeatures()
else if (mode === '--writing') checkWriting()
else {
  console.error('Use --content, --design, --features, or --writing')
  process.exit(2)
}

if (errors.length) {
  for (const error of errors) console.error(error)
  process.exit(1)
}

const labels = {
  '--content': 'website content verification passed',
  '--design': 'minimal design verification passed',
  '--features': 'website feature verification passed',
  '--writing': 'website writing verification passed'
}
console.log(labels[mode])
