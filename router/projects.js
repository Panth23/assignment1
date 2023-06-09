const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Projects Page');
});

router.get('/details', (req, res) => {
    res.send('Project Details Page');
});

module.exports = router;