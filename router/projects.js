const express = require('express');
const router = express.Router();

const {getAboutPage,getProjectPage,getServicePage,getContactPage } = require('../controllers/projects.controller')

router.get('/about', getAboutPage);
router.get('/projects',getProjectPage);
router.get('/services',getServicePage);
router.get('/contact',getContactPage);
module.exports = router;