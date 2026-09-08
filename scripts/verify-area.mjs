import fs from 'node:fs';
import path from 'node:path';

const modules = process.argv.slice(2);
const fail = message => {
  console.error(message);
  process.exitCode = 1;
};

if (modules.length === 0) fail('Pass at least one module directory.');

for (const moduleName of modules) {
  const directory = path.resolve(moduleName);
  if (!fs.existsSync(directory)) {
    fail(`Missing module: ${moduleName}`);
    continue;
  }

  const names = fs.readdirSync(directory).filter(name => name.endsWith('.md'));
  for (const required of ['README.md', 'exercises.md', 'quiz.md', 'project.md', 'solutions.md']) {
    if (!names.includes(required)) fail(`${moduleName} is missing ${required}`);
  }

  const lessons = names.filter(name => /^\d{2}-.+\.md$/.test(name));
  if (lessons.length < 3) fail(`${moduleName} needs at least three numbered lessons`);

  for (const name of names) {
    const text = fs.readFileSync(path.join(directory, name), 'utf8');
    const words = text.replace(/```[\s\S]*?```/g, ' ').match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) ?? [];
    const minimum = /^\d{2}-/.test(name) ? 220 : 100;
    if (words.length < minimum) fail(`${moduleName}/${name} is too short: ${words.length} words`);
    if (/\b(TODO|TBD|coming soon|placeholder)\b/i.test(text)) fail(`${moduleName}/${name} contains unfinished text`);
  }
}

if (!process.exitCode) console.log('area verification passed');
