const btnSubmit = document.getElementById('btn-submit')
const originalURL = document.getElementById('originalURL')
btnSubmit.addEventListener('click', () => {
	if (originalURL.checkValidity()) {
		btnSubmit.innerText = '處理中...'
		btnSubmit.classList.add('disabled')
	}
})
