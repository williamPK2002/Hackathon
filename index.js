console.log("Hello World!!!!")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hi', function (req, res) {
    res.send('SE')
  })

app.listen(3000)