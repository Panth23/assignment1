const express = require('express');
const router = express.Router();

const getAboutPage = ((req, res,next) => {
    res.render('about');
});

const getProjectPage = ((req,res,next)=>{
    res.render('projects')
})

const getServicePage=((req,res,next)=>{
    res.render('services');
})

const getContactPage=((req,res,next)=>{
    res.render('contact');
})

module.exports = {getAboutPage,getProjectPage,getServicePage,getContactPage};