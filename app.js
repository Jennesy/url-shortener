const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateURL = require('./models/generateURL')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

//routes setting
app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.render('index')
})
app.post('/', async (req, res) => {
  const routes = await generateURL(req.body.originalURL)
  const shortenURL = `${req.protocol}://${req.get('host')}/${routes}`
  res.render('result', { shortenURL })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})