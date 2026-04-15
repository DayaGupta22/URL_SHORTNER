const express = require('express');
const app = express();
const dotenv = require('dotenv')


const URL = require('./models/url.js')
const urlRoute = require('./routes/url.js')
const PORT = 8000;
dotenv.config()
app.use(express.json());
const connectDb = require('./connect')

connectDb()
    .then(() => console.log("connection establish"))
    .catch((err) => console.log("connection failed", err))

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const enrty = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamp:Date.now()
            }
        }
    });
    res.redirect(enrty.redirectURL)
})
app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`server is running at PORT:${PORT}`))
