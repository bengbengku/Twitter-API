const express = require("express");
const app = express();
const port = 3000;
const Twitter = require("./api/helpers/twitter");
const twitter = new Twitter();

app.get("/tweets", (req, res) => {
  const query = req.query.q;
  const count = req.query.count;

  //twitter dipassing lewat api/helpers/twitter.js
  twitter
    .get(query, count)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log(`Twitter app listening at http://localhost:${port}`);
});
