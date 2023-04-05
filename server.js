const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Dũng đẹp trai ', )
})
app.get('/about', (req, res) => {
    res.send(' Dũng đẹp trai ', )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})