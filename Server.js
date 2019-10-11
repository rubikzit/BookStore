const express = require('express');
const lodash = require('lodash');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const port= 3000;
app = express();

var 

app.use(function(req,res,next){
    console.log('Server is listening on '+ port);
    next();
})
app.get('/mainpage',function(req,res){
    res.send('Hi');
    console.log('Server is listening on'+ port);
}).listen(port)