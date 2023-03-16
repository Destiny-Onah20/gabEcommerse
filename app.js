const express = require("express");
const fileUpload = require("express-fileupload");
const prodRoute = require("./routes/productR");
const app = express();



app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}))
app.use("/api", prodRoute);

app.get("/", (req,res)=>{
    res.send("Cloth api for gabriel")
});

module.exports = app;