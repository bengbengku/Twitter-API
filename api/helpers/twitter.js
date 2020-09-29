const axios = require('axios');
const URL = "https://api.twitter.com/1.1/search/tweets.json";
class Twitter {

    get(query, count) {
        return axios.get(URL, {
            params: {
              q: query,
              count: count,
            },
            headers: {
              Authorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAAMYgIAEAAAAAF7Jwby68Lnz5rfRAREqJyFwwSFI%3DmUZzirA3tkhfrtW3TyXzYuUmc1RuzNTJr2r831Syp5YvW78qzU",
            },
          })
    }


}

module.exports = Twitter;