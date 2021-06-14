require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 3000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', function (req, res) {
  // res.send('hello world')
  Promise.all([
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${process.env.API_KEY}`,
    ),
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=1&api_key=${process.env.API_KEY}`,
    ),
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=10&page=1&api_key=${process.env.API_KEY}`,
    ),
  ])
    .then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json()
        }),
      )
    })
    .then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      console.log(data)
      res.send({data})
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error)
    })
})

const ROVERS = ['curiosity', 'opportunity', 'spirit']

const roverData = () => {
  ROVERS.forEach((rover) => {
    console.log(rover)
    app.get(`/${rover}`, async (req, res) => {
      try {
        Promise.all([
          fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${process.env.API_KEY}`,
          ),
          fetch(
            `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${process.env.API_KEY}`,
          ),
        ])
          .then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(
              responses.map(function (response) {
                console.log('>>>>>', response)
                return response.json()
              }),
            )
          })
          .then(function (data) {
            // Log the data to the console
            // You would do something with both sets of data here
            console.log('data', data)
            res.send({data})
          })
          .catch(function (error) {
            // if there's an error, log it
            console.log(error)
          })
      } catch (err) {
        console.log('error:', err)
      }
    })
  })
}

roverData()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
