//Dependencies
const express = require('express');
//Creates capability to access views through router
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new');
});

router.post('/', (req, res) => {

});

module.exports = router