const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config( {path:'./config/config.env'})
const app = require("./app")

const port = 1800;
const db = process.env.DB
mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongoose connected Succesfully...");
    app.listen(port,()=>{
        console.log(`Listening to port ${port}`)
    })
}).catch((error)=>{
    console.log(error.message)
})