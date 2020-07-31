const express = require('express')
const router=new express.Router();

router.get('', (req, res) => {
    res.render('home');
})

router.get('/research', (req, res) => {
    res.render('research');
})

router.get('/members', (req, res) => {
    res.render('members');
})

router.get('/publications', (req, res) => {
    res.render('publications');
})

router.get('/resources', (req, res) => {
    res.render('resources');
})

module.exports=router;