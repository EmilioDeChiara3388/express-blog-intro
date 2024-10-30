const express = require('express')
const app = express()
const port = 3000
const host = "http://127.0.0.1"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`)
})