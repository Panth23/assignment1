const express = require('express');
const router = express.Router();

const home = ((req, res,next) => {
    let pageTitle = "Home Page"
    res.render('index',{title:'Express'});
});


module.exports = {home};