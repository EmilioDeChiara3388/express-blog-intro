const express = require('express')
const app = express()
app.use(express.static("public"))
const port = 3000
const host = "http://127.0.0.1"

const mySeries = require("./controller/data.js")

app.get('/', (req, res) => {
  const markup = `
  <h1>Benvenuto nel mio Blog!<h1>
  <img src= "./img/rust.jpg" alt = "True Detective" style = "width:400px; aspect-ratio:1">
  <img src= "./img/dexter.jpg" alt = "Dexter" style = "width:400px; aspect-ratio:1">
  <img src= "./img/Walter_White_S5B.png" alt = "Breaking Bad" style = "width:400px; aspect-ratio:1">
  <img src= "/img/utopia-blogs.jpg" alt = "Utopia" style = "width:400px; aspect-ratio:1">
  <img src= "./img/luther.jpg" alt = "Luther" style = "width:400px; aspect-ratio:1">
  `


  res.send(markup)
})

app.get("/posts", mySeries.index)

app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`)
})