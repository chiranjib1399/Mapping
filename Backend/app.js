const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost:27017/mapping'
const app= express();

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
  console.log('connected....')
})
app.use(express.json());
const albumRouter =require('./router/album.js');

app.use('/albums',albumRouter);


app.listen(4000,()=>{
  console.log("listing on 4000")
})