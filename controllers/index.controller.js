const express = require('express');
const router = express.Router();

const getHomePage = ((req, res,next) => {
    res.render('index',{title:'Express'});
});
module.exports = {getHomePage};