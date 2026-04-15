const express = require('express');
const { handleGenrateNewShortUrl, handleGetAnalytics, handleUpdateHistory } = require('../controller/url.js')
const router = express.Router();

router.post('/', handleGenrateNewShortUrl)
router.get('/:shortId',  handleUpdateHistory)
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;