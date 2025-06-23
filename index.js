const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const server =express();

//connect to db
connectDB();

server.use(express.json());

server.use('/', productRoutes.router);


server.get('/',(req,res)=>{
    res.send('hello world')
})

server.listen(3000,()=>{
    console.log("server started")
})