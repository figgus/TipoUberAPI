'use strict';
var express = require('express');
var app = express();
var PORT =  3030;

var fs=require('fs');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var routesUsuarios=require('./Api/routes/Usuarios').router;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','*');
  if(req.method==='OPTIONS'){
    req.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/',routesUsuarios);

fs.readdirSync(__dirname+'\\Models').forEach((filename)=>{
  const url=__dirname+'\\Models\\'+filename;
  var modelo= require(url);
  const nombreModelo=filename.substring(0,filename.length-3);
  mongoose.model(nombreModelo,modelo);
});

app.listen(PORT);
