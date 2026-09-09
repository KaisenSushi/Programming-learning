import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const source = path.join(root, 'website')
const output = path.join(root, 'dist')
const staticOutput = path.join(output, 'static')
const serverOutput = path.join(output, 'server')

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Refusing to build outside the repository dist folder')
}

fs.rmSync(output, { recursive: true, force: true })
fs.mkdirSync(staticOutput, { recursive: true })
fs.mkdirSync(serverOutput, { recursive: true })
fs.cpSync(source, staticOutput, { recursive: true })

const worker = `export default {
  async fetch(request, env) {
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      return env.ASSETS.fetch(request)
    }
    return new Response('Not found', { status: 404 })
  }
}
`

fs.writeFileSync(path.join(serverOutput, 'index.js'), worker)
console.log('website build passed')
