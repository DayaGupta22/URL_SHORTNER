const shortid = require('shortid')
const URl = require('../models/url.js')
async function handleGenrateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' })
    }
    const shortID = shortid();
    await URl.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: []
    })
    return res.json({ id: shortID })
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URl.findOne({ shortId });
    return res.json({ totalClicks: result.visitHistory.length,
         analytics: result.visitHistory 
        })
}
module.exports = {
    handleGenrateNewShortUrl,
    handleGetAnalytics
}