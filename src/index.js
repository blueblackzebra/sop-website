const path = require('path');
const express = require('express');
const ejs=require('ejs');

const mainRouter=require('./routers/main');

const website=express();
const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');

website.use(mainRouter);
website.set('view engine', 'ejs');
website.set('views', viewsPath);
website.use(express.static(publicDirPath));

website.listen(port, ()=> {
    console.log("Website is running on port "+port)
})






