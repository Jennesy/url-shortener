const copyButton = document.querySelector('#btn-copy')
const shortenUrlLabel = document.querySelector('#shortenURL-label')
copyButton.addEventListener('click', (event) => {
	const copyURL = document.querySelector('#shortenURL').getAttribute('value')
	navigator.clipboard.writeText(copyURL).then(() => {
		shortenUrlLabel.classList.add('success')
		setTimeout(() => {
			shortenUrlLabel.classList.remove('success')
		}, 500)
	})
})
