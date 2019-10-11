
const mysql = require('mysql');

var conn = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  password: "",
  database: "bookstore",
});

conn.connect(function (err) {
  if (err){
    console.log("that bai");
  };
  
  console.log('ket noi thanh cong');
});
const express = require('express');
const lodash = require('lodash');
const fs = require('fs');
const path = require('path');
const port= 3000;
app = express();
app.use(function(req,res,next){
    console.log('Server is listening on '+ port);
    next();
})
app.get('/mainpage',function(req,res){
    res.sendFile(path.join(__dirname+'/Giaodien.html'));
    console.log('Server is listening on'+ port);
}).listen(port)
