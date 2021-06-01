const express = require('express');
const router = express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User = require('../model/userSchema');
const Authenticate=require("../Middleware/authenticate");



require('../db/conn');


router.get("/", (req, res) => {
    res.send("Hello Router")
})

//Register Route
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details" })
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email Already Exist" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password doesn't match" })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            const userRegister = await user.save();

            res.status(201).json({message:"registration successfull"})
        }

    }
    catch (err) {
        console.log(err)

    }
})
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) { 
            res.status(400).json({ error: "Please Enter your creadentitals" })
        }
        const userLogin = await User.findOne({ email: email })
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);
            const token=await userLogin.generateAuthToken();
           
            // console.log(token);
            res.cookie("jwtoken",token,{
                 expires:new Date(Date.now()+ 25892000000),
                
                httpOnly:true// to run on http if application is nit secure
                
                 
            }); //Creating Cokkies
           


        if (!isMatch) {
            return res.status(400).json({ error: "User doesn't exist" })
        } else {
            res.status(200).json({ message: "Login Successfull" })
        }

        }else{

            return res.status(400).json({ error: "User doesn't exist" })
        }

        
    } catch (err) {
        console.log(err);
    }

})
router.get("/aboutus ",Authenticate,(req, res) => {
    console.log("hello about page");
    res.send(req.rootUser);

})

module.exports = router;


//Using Promises
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email  ||  !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Please fill all the details"})
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email Already Exist"})
//         }
//         const user=new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(200).json({message:"Registration Successfull"})

//         }).catch((err)=>res.status(500).json({error:"Registration failed"}))

//     }).catch(err=>{console.log(err);})

