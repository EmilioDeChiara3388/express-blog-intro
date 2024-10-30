const express = require('express')
const app = express()
const port = 3000
const host = "http://127.0.0.1"

const mySeries = require("./controller/data.js")

app.get('/', (req, res) => {
  res.send(`<h1>Benvenuto nel mio Blog!<h1>`)
})

app.get("/posts", mySeries.index)

app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`)
})