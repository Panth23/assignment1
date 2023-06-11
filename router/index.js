const express = require('express');
const router = express.Router();

const { getHomePage} = require('../controllers/index.controller')

router.get('/', getHomePage);

module.exports = router;