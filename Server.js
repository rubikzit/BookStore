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
