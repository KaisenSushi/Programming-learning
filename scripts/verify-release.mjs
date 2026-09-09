import { readdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const modules = readdirSync('.').filter(name => /^\d\d-/.test(name))

function run(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8', stdio: 'pipe' })

  if (result.status !== 0) {
    process.stdout.write(result.stdout || '')
    process.stderr.write(result.stderr || '')
    process.exit(result.status ?? 1)
  }
}

for (const mode of ['--self-test', '--style', '--links', '--root']) {
  run(process.execPath, ['scripts/verify-curriculum.mjs', mode])
}

for (const module of modules) {
  run(process.execPath, ['scripts/verify-area.mjs', module])
}

const pythonCommands = process.platform === 'win32'
  ? [['py', ['scripts/verify-python-examples.py']], ['python', ['scripts/verify-python-examples.py']]]
  : [['python3', ['scripts/verify-python-examples.py']], ['python', ['scripts/verify-python-examples.py']]]

let pythonPassed = false

for (const [command, args] of pythonCommands) {
  const result = spawnSync(command, args, { encoding: 'utf8', stdio: 'pipe' })
  if (!result.error && result.status === 0) {
    pythonPassed = true
    break
  }
}

if (!pythonPassed) {
  console.error('Python example verification could not run or did not pass')
  process.exit(1)
}

console.log('full curriculum verification passed')
