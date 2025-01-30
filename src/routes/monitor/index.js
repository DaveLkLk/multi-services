const { Router} = require('express');
const router = Router();
const {PingWebsite} = require('./ping.js')
// /monitor
router.get('/ping', PingWebsite);
module.exports = router;