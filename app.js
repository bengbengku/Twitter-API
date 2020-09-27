const express = require('express')
const app = express()
const port = 3000

app.get('/tweets', (req, res) => {
    console.log(req.query);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Twitter app listening at http://localhost:${port}`)
})