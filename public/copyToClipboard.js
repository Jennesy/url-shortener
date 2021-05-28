const copyURL = document.querySelector('#shortenURL');
const copyButton = document.querySelector('#copy-button')
console.log('copyURL', copyURL)
copyButton.addEventListener('click', (event) => {
  console.log('click event')
  copyURL.select()
  document.execCommand('copy')
})