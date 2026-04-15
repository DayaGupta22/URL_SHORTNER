const express= require('express');
const { handleGenrateNewShortUrl,handleGetAnalytics}= require('../controller/url.js')
const router = express.Router();

router.post('/', handleGenrateNewShortUrl)
router.get('/analytics/:shortId',handleGetAnalytics)
module.exports= router;