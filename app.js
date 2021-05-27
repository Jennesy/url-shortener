const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//routes setting
app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})