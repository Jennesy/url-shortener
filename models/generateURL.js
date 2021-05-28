const URL = require('./url')
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const collection = characters.split('')

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function isValid(routes) {
  return URL.find({ shortenURL: routes }).lean()
    .then(url => {
      return !Boolean(url.length)
    })
    .catch(err => {
      console.log(err)
    })
}

async function generateURL(originalURL) {
  let routes = ''
  for (let i = 0; i < 5; i++) {
    routes += sample(collection)
  }
  if (await isValid(routes)) {
    console.log('isValid')
    URL.create({ originalURL, shortenURL: routes })
      .then(url => { console.log(`${url} saved`) })
      .catch(error => console.log(error))
    return routes
  } else {
    generateURL(originalURL)
  }
}

module.exports = generateURL