const express= require ('express')
const {loginUser,signUpUser}=require('../controller/userController')



const router=express.Router()

//login
router.post('/login',loginUser)


//signUp
router.post('/signUp',signUpUser)



module.exports=router