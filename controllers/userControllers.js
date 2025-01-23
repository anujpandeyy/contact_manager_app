const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require('../models/userModel');

const getCurrentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user Information"});
});

const postLoginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login User"});
});

const postRegisterUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error ("All Fields are reuired")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error ("User already registered!")
    }
    const hashPassword = await bcrypt.hash(password,10);
    console.log("Hashed Password",hashPassword);
    const user = await User.create({
        username,
        email,
        password: hashPassword,
    });
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email: user.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message:"Register the user"});
});


module.exports = {getCurrentUser,postLoginUser,postRegisterUser};