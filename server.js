const express = require("express");
const mongoose = require("mongoose")
const app = require("./app")

const port = 1800;
const db = "mongodb+srv://BraveDev:denkuling20@safehome.vvmble0.mongodb.net/?retryWrites=true&w=majority"
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