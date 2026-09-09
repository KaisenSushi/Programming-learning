import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const mode = process.argv[2] || '--content'
const root = process.cwd()
const website = path.join(root, 'website')
const requiredFiles = [
  'index.html',
  '404.html',
  'assets/styles.css',
  'assets/app.js',
  'assets/og.png'
]
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
const errors = []

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
  for (const file of requiredFiles) {
    expect(fs.existsSync(path.join(website, file)), `website is missing ${file}`)
  }

  const html = read('website/index.html')
  const app = read('website/assets/app.js')
  const workflow = read('.github/workflows/pages.yml')
  const hosting = JSON.parse(read('.openai/hosting.json'))

  for (const moduleName of moduleNames) {
    expect(app.includes(`slug: '${moduleName}'`), `website data is missing ${moduleName}`)
    expect(app.includes(`${moduleName}/README.md`) || app.includes('${module.slug}/README.md'), `website does not build a module link for ${moduleName}`)

    const lessons = fs.readdirSync(path.join(root, moduleName)).filter(name => /^\d\d-.*\.md$/.test(name))
    expect(lessons.length === 3, `${moduleName} should have three numbered lessons`)
    for (const lesson of lessons) {
      expect(app.includes(`'${lesson}'`), `website data is missing ${moduleName}/${lesson}`)
    }

    for (const extra of ['exercises.md', 'quiz.md', 'project.md', 'solutions.md']) {
      expect(fs.existsSync(path.join(root, moduleName, extra)), `${moduleName} is missing ${extra}`)
      expect(app.includes(`'${extra}'`), `website data does not include ${extra}`)
    }
  }

  expect((app.match(/\n\s+id: '\d\d'/g) || []).length === 10, 'website should contain exactly ten modules')
  expect((app.match(/'lesson'\]/g) || []).length === 30, 'website should contain exactly thirty lessons')
  expect(html.includes('10</strong><span>modules'), 'website module total is missing')
  expect(html.includes('30</strong><span>lessons'), 'website lesson total is missing')

  const localAssets = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)]
    .map(match => match[1])
    .filter(target => !/^(?:https?:|mailto:)/.test(target))

  for (const target of localAssets) {
    const cleanTarget = target.split('?')[0]
    const resolved = path.resolve(website, cleanTarget)
    expect(fs.existsSync(resolved), `index.html has a broken local link ${target}`)
  }

  const image = fs.readFileSync(path.join(website, 'assets/og.png'))
  expect(image.subarray(1, 4).toString('ascii') === 'PNG', 'social card is not a PNG')
  const width = image.readUInt32BE(16)
  const height = image.readUInt32BE(20)
  expect(width >= 1200 && height >= 600, 'social card is too small')
  expect(width / height > 1.8 && width / height < 2.05, 'social card should use a wide social preview ratio')

  expect(workflow.includes('actions/checkout@v7'), 'Pages workflow should use the checked checkout release')
  expect(workflow.includes('actions/configure-pages@v5'), 'Pages workflow should configure GitHub Pages')
  expect(workflow.includes('actions/upload-pages-artifact@v5'), 'Pages workflow should upload the website folder')
  expect(workflow.includes('actions/deploy-pages@v5'), 'Pages workflow should publish the Pages artifact')
  expect(workflow.includes('path: website'), 'Pages workflow should publish only the website folder')
  expect(hosting.static?.directory === 'dist', 'Sites hosting should publish the validated dist folder')

  const syntax = spawnSync(process.execPath, ['--check', 'website/assets/app.js'], { encoding: 'utf8' })
  expect(syntax.status === 0, `website JavaScript has a syntax error ${syntax.stderr}`)
}

function checkFeatures() {
  const html = read('website/index.html')
  const app = read('website/assets/app.js')
  const css = read('website/assets/styles.css')

  const requiredHtml = [
    'data-mode="beginner"',
    'data-mode="advanced"',
    'id="course-search"',
    'aria-live="polite"',
    'aria-expanded="false"',
    'class="skip-link"',
    'id="copy-setup"'
  ]
  for (const token of requiredHtml) expect(html.includes(token), `website is missing ${token}`)

  const requiredApp = [
    'localStorage.getItem',
    'localStorage.setItem',
    "checkbox.type = 'checkbox'",
    "event.key === '/'",
    'navigator.clipboard.writeText',
    'filterModules()',
    "setAttribute('aria-expanded'"
  ]
  for (const token of requiredApp) expect(app.includes(token), `website feature is missing ${token}`)

  const requiredCss = [
    '@media (max-width: 840px)',
    '@media (max-width: 620px)',
    '@media (prefers-reduced-motion: reduce)',
    ':focus-visible',
    'min-height: 44px',
    '--bg: #0d1117',
    '--panel: #161b22',
    '--border: #30363d'
  ]
  for (const token of requiredCss) expect(css.includes(token), `website style is missing ${token}`)

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
  expect(new Set(ids).size === ids.length, 'index.html contains duplicate ids')
  expect(!/<button(?![^>]*\stype="button")/i.test(html), 'every static button should state type="button"')
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
  const shortStepWithPunctuation = /^- [a-z][^\n]{0,80}[.!?]$/gm

  expect(emDash.test('bad\u2014dash'), 'em dash checker positive control failed')
  expect(emoji.test('bad \u{1F600} symbol'), 'emoji checker positive control failed')
  expect(shortStepWithPunctuation.test('- run it.'), 'short step checker positive control failed')

  for (const file of publicFiles) {
    const text = fs.readFileSync(file, 'utf8')
    const relative = path.relative(root, file)
    expect(!emDash.test(text), `${relative} contains an em dash`)
    expect(!emoji.test(text), `${relative} contains an emoji or pictograph`)
  }

  const readme = read('README.md')
  expect(!shortStepWithPunctuation.test(readme), 'README short action steps should not end in punctuation')
  expect(!readme.includes('Write down what you learned in one sentence.'), 'README still contains the formal study step')
  expect(readme.includes('## Pick your path'), 'README should show beginner and experienced paths')
  expect(readme.includes('This is enough'), 'README should keep the study routine casual and short')
}

if (mode === '--content') checkContent()
else if (mode === '--features') checkFeatures()
else if (mode === '--writing') checkWriting()
else {
  console.error('Use --content, --features, or --writing')
  process.exit(2)
}

if (errors.length) {
  for (const error of errors) console.error(error)
  process.exit(1)
}

const labels = {
  '--content': 'website content verification passed',
  '--features': 'website feature verification passed',
  '--writing': 'website writing verification passed'
}
console.log(labels[mode])
