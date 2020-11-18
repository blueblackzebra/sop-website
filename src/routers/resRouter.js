const express = require("express")
const router = new express.Router();

router.get('/research/paper1', (req, res) => {
    res.render('paper', {
        paperTitle: "NLP paper",
        authorList: "PersonA PersonB",
        university: "UniA",
        abstractText: "Abstract for NLP paper"
    });
})

router.get('/research/paper2', (req, res) => {
    res.render('paper', {
        paperTitle: "CV paper",
        authorList: "PersonC PersonD",
        university: "UniY",
        abstractText: "Abstract for CV paper"
    });
})

module.exports=router;