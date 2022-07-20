const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.render('index.ejs')
});

route.get('/add-user',(req,res)=>{
    res.render('add_user.ejs')
});

route.get('/update-user',(req,res)=>{
    res.render('update_user.ejs')
});

route.get('/add-order',(req,res)=>{
    res.render('add_order.ejs')
});

route.get('/login',(req,res)=>{
    res.render('login.ejs')
});

module.exports = route;