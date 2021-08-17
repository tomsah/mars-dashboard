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
  res.send('HOME PAGE')
})

const ROVERS = ['curiosity', 'opportunity', 'spirit']

const roverData = () => {
  ROVERS.forEach((rover) => {
    console.log(rover)
    app.get(`/${rover}`, async (req, res) => {
      let roverData = {}
      try {
        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${process.env.API_KEY}`,
        )
          .then((response) => response.json())
          .then(({photo_manifest}) => {
            const {
              name,
              landing_date,
              launch_date,
              status,
              max_sol,
              max_date,
              total_photos,
            } = photo_manifest
            const manifest = {
              name,
              landing_date,
              launch_date,
              status,
              max_sol,
              max_date,
              total_photos,
            }
            roverData = {...roverData, manifest}
            console.log('data', photo_manifest, 'manifest', manifest)
            return fetch(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${max_sol}&api_key=${process.env.API_KEY}`,
            )
          })
          .then((response) => response.json())
          .then(({photos}) => {
            roverData = {...roverData, photos}
            res.send(roverData)
          })
      } catch (err) {
        console.log('error:', err)
      }
    })
  })
}

roverData()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
