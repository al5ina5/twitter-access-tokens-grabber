const axios = require('axios')

module.exports = (req, res) => {
    axios
        .post(
            `https://api.twitter.com/oauth/access_token?oauth_consumer_key=${process.env.TWITTER_CONSUMER_KEY}&${req.body.urlParams}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
                }
            }
        )
        .then((resp) => {
            res.send(resp.data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
}
