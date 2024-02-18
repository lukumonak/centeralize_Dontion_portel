const newUser = require('../models/newUser');
var jwt = require('jsonwebtoken');

const mongoose= require('mongoose');

const createToken=(_id)=>{
   return  jwt.sign({_id}, process.env.SECRET, {expiresIn:'300d'})
}

const loginUser=async(req,res)=>{
        const {email,password}=req.body

    try{
        const newuser=await newUser.login(email,password)
        const token=createToken(newuser. _id)
        res.status(200).json({email,token,message:"welcome"})

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const signUpUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const newuser=await newUser.signup(email,password)
        const token=createToken(newuser._id)
        res.status(200).json({email,token})
    
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }

}
 
module.exports={
    loginUser,
    signUpUser
}