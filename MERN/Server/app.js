const dotenv=require("dotenv")
const mongoose = require("mongoose")
const express = require("express");
const cookieParser=require("cookie-parser")
const app = express();




dotenv.config({path:'./config.env'});
require('./db/conn')

app.use(cookieParser());
app.use(express.json());
// const User=require('./model/userSchema')

app.use(require('./router/auth'));



const PORT=process.env.PORT








// app.get("/about", middleware, (req, res) => {
//     res.send("Hello From About Side");

// })
app.get("/contact", (req, res) => {
    console.log(req.cookies.jwtoken);

})


app.listen(PORT, () => {
    console.log("server is running at Port no",PORT)
})








