const axios = require('axios')

module.exports = (req, res) => {
    const uri = 'http://localhost:3000/callback'
    const encoded = encodeURI(uri)

    axios
        .post(
            `https://api.twitter.com/oauth/request_token?oauth_callback=${encoded}&oauth_consumer_key=${process.env.TWITTER_CONSUMER_KEY}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
                }
            }
        )
        .then((resp) => {
            res.status(200).send(`https://api.twitter.com/oauth/authorize?${resp.data}`)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}
