import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const moduleNames = [
  '00-getting-started', '01-python', '02-git-github', '03-problem-solving',
  '04-data-structures', '05-algorithms', '06-testing-debugging',
  '07-sql-databases', '08-c', '09-computer-architecture'
];
const rootFiles = ['README.md', 'ROADMAP.md', 'RESOURCES.md', 'VIDEOS.md', 'SETUP-WINDOWS.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'LICENSE'];
const mode = process.argv[2];
const errors = [];
const deceptivePatterns = [
  /written (entirely|only) by (a )?human/i,
  /not (written|generated) by ai/i,
  /human[- ]authored/i,
  /remove.{0,20}(ai )?watermark/i,
  /bypass.{0,20}(ai )?detector/i
];

function walk(directory) {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (['.git', '.unlazy', 'node_modules'].includes(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

function scanStyle(files) {
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    if (text.includes('\u2014')) errors.push(`${path.relative(root, file)} contains an em dash`);
    if (/\p{Extended_Pictographic}/u.test(text)) errors.push(`${path.relative(root, file)} contains an emoji or pictograph`);
    if (path.basename(file) !== 'verify-curriculum.mjs') {
      for (const pattern of deceptivePatterns) {
        if (pattern.test(text)) errors.push(`${path.relative(root, file)} contains disallowed provenance or evasion wording`);
      }
    }
  }
}

function checkLinks(files) {
  for (const file of files.filter(file => file.endsWith('.md'))) {
    const text = fs.readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');
    const links = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match => match[1]);
    for (let target of links) {
      if (/^(https?:|mailto:|#)/i.test(target)) continue;
      target = target.split('#')[0].replace(/%20/g, ' ');
      if (!target) continue;
      const resolved = path.resolve(path.dirname(file), target);
      if (!fs.existsSync(resolved)) errors.push(`${path.relative(root, file)} has broken link: ${target}`);
    }
  }
}

if (mode === '--self-test') {
  const caught = [
    'bad\u2014dash'.includes('\u2014'),
    /\p{Extended_Pictographic}/u.test('bad \u{1F600} symbol'),
    deceptivePatterns.some(pattern => pattern.test('written entirely by a human')),
    deceptivePatterns.some(pattern => pattern.test('remove AI watermark')),
    deceptivePatterns.some(pattern => pattern.test('bypass a detector'))
  ].every(Boolean);
  if (!caught) process.exit(1);
  console.log('curriculum scanner self-test passed');
  process.exit(0);
}

const files = walk(root);

if (mode === '--style') {
  scanStyle(files.filter(file => /\.(md|py|c|sql|json|ya?ml|mjs)$/i.test(file)));
  if (!errors.length) console.log('curriculum style verification passed');
} else if (mode === '--links') {
  checkLinks(files);
  for (const name of moduleNames) {
    const moduleRoot = path.join(root, name);
    if (!fs.existsSync(moduleRoot)) errors.push(`missing module ${name}`);
  }
  if (!errors.length) console.log('curriculum link verification passed');
} else if (mode === '--root') {
  for (const name of rootFiles) if (!fs.existsSync(path.join(root, name))) errors.push(`missing root file ${name}`);
  const readme = fs.existsSync(path.join(root, 'README.md')) ? fs.readFileSync(path.join(root, 'README.md'), 'utf8') : '';
  const roadmap = fs.existsSync(path.join(root, 'ROADMAP.md')) ? fs.readFileSync(path.join(root, 'ROADMAP.md'), 'utf8') : '';
  for (const name of moduleNames) if (!readme.includes(`${name}/README.md`) && !roadmap.includes(`${name}/README.md`)) errors.push(`root navigation omits ${name}`);
  const resources = fs.existsSync(path.join(root, 'RESOURCES.md')) ? fs.readFileSync(path.join(root, 'RESOURCES.md'), 'utf8') : '';
  for (const host of ['docs.python.org', 'git-scm.com', 'docs.github.com', 'developer.mozilla.org']) if (!resources.includes(host)) errors.push(`resources omit ${host}`);
  const setup = fs.existsSync(path.join(root, 'SETUP-WINDOWS.md')) ? fs.readFileSync(path.join(root, 'SETUP-WINDOWS.md'), 'utf8') : '';
  for (const command of ['Python.Python.3.14', 'Git.Git', 'Microsoft.VisualStudioCode', 'ms-python.python', 'py --version', 'git --version']) if (!setup.includes(command)) errors.push(`Windows setup omits ${command}`);
  const videos = fs.existsSync(path.join(root, 'VIDEOS.md')) ? fs.readFileSync(path.join(root, 'VIDEOS.md'), 'utf8') : '';
  const youtubeLinks = videos.match(/https:\/\/www\.youtube\.com\/watch\?v=/g) ?? [];
  if (youtubeLinks.length < 4) errors.push('video guide needs at least four direct YouTube links');
  scanStyle(files.filter(file => /\.(md|py|c|sql|json|ya?ml|mjs)$/i.test(file)));
  if (!errors.length) console.log('curriculum root verification passed');
} else {
  console.error('Use --links, --style, --root, or --self-test');
  process.exit(2);
}

if (errors.length) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
