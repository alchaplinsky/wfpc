const express = require('express')
const app = express()
const port = 3002

app.get('/', (_req, res) => {
  res.send('Hello, Express!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
