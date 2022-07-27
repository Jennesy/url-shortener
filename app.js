const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateURL = require('./models/generateURL')
require('./config/mongoose')
const URL = require('./models/url')

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

//routes setting
app.use(express.static('public'))
app.use(express.Router({ caseSensitive: true }))

app.get('/404', (req, res) => {
	return res.render('404', { is404: true })
})
app.get('/', (req, res) => {
	return res.render('index', { isHome: true })
})
app.post('/', async (req, res) => {
	console.log('POST')
	const originalURL = req.body.originalURL
	const routes = await generateURL(originalURL)
	const shortenURL = `${req.protocol}://${req.get('host')}/${routes}`
	return res.render('result', { originalURL, shortenURL, isHome: false })
})
app.get('/:shortenURL', (req, res) => {
	const shortenURL = req.params.shortenURL
	return URL.findOne({ shortenURL })
		.lean()
		.then((url) => {
			console.log('url', url)
			res.status(301).redirect(url.originalURL)
		})
		.catch((error) => {
			console.log(error)
			res.status(404).redirect('/404')
		})
})
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
