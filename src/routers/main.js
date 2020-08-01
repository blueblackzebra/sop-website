const express = require('express')
const router=new express.Router();

router.get('', (req, res) => {
    res.render('home', {
        title: "Multimodal Cognition Research Group"
    });
})

router.get('/research', (req, res) => {
    res.render('research', {
        title: "Research",
    });
})

router.get('/members', (req, res) => {
    res.render('members', {
        title: "Members"
    });
})

router.get('/publications', (req, res) => {
    res.render('publications', {
        title: "Publications"
    });
})

router.get('/resources', (req, res) => {
    res.render('resources', {
        title: "Resources"
    });
})

module.exports=router;