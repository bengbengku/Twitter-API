const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/tweets", (req, res) => {
  const query = req.query.q;
  const count = req.query.count;

  const url = "https://api.twitter.com/1.1/search/tweets.json";
  axios
    .get(url, {
      params: {
        q: query,
        count: count,
      },
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAMYgIAEAAAAAF7Jwby68Lnz5rfRAREqJyFwwSFI%3DmUZzirA3tkhfrtW3TyXzYuUmc1RuzNTJr2r831Syp5YvW78qzU",
      },
    })
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
