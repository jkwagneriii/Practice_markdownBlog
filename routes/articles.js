//Dependencies
const express = require('express');
//Creates capability to access views through router
const router = express.Router();

router.get('/', (req, res) => {
    res.send('In articles');
})

module.exports = router