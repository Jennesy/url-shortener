const copyButton = document.querySelector('#btn-copy')
const shortenURL = document.querySelector('#shortenURL')
copyButton.addEventListener('click', (event) => {
	const copyURL = shortenURL.innerText
	navigator.clipboard.writeText(copyURL).then(() => {
		shortenURL.classList.add('success')
		setTimeout(() => {
			shortenURL.classList.remove('success')
		}, 500)
	})
})
