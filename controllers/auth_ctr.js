const userModel = require("../models/user_model.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')





// Create New User =============
const register = async (req , res , next)=>{

    const passHash = bcrypt.hashSync(req.body.password, 10)
   
    const newUser = new userModel({
        username : req.body.username,
        password : passHash,
        email : req.body.email
    })
    try{

        const saveduser = await newUser.save()
        res.status(200).send("user has been created !")

    }

 
 catch(err){
       next(err)
                  }
    
}


// Get Auth 

const login = async (req, res, next)=>{

    try{

    const user = await userModel.findOne({username : req.body.username})
    !user && res.status(404).json("username not found")

    const isPasswordcorrect = await bcrypt.compare(req.body.password, user.password)
    !isPasswordcorrect && res.status(404).json("password is not correct")

    const {password , isAdmin, ...others} = user._doc

    const token = jwt.sign({id: user._id , isAdmin : user.isAdmin}, process.env.SECRET)

    res.status(200).json({token , userID : user._id})
    

    }  catch(err){
        next(err)
    }  
}


module.exports = {register, login}