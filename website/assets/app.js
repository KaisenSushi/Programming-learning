const copyButton = document.querySelector('#copy-setup')
const copyStatus = document.querySelector('#copy-status')

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector('#setup-code').textContent)
    copyStatus.textContent = 'copied'
  } catch {
    copyStatus.textContent = 'select the commands and copy them'
  }
})
