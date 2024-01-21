const userModel = require("../models/user_model.js");
const { createError } = require("../utils/error.js"); 







// Update User ====================

const updateUser = async (req, res)=>{

    try{

        const updatedUser= await userModel.findByIdAndUpdate(req.params.id , 
            {$set : req.body}, 
            {new : true})
        res.status(200).send("Updated User !")


    } catch(err){
        res.status(500).json(err)
    }

}



// delete User ============================= 

const deleteUser = async (req, res)=>{

    try{

        const deletedUser= await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted User !")


    } catch(err){
        res.status(500).json(err)
    }

}

// Get all Users ========================

const getAllUser =  async (req, res, next)=>{
    
    /* const failed = true
    
    if(failed) {return next(createError(401 , "not authentificated to this "))} */

    try{
        const Users = await userModel.find()
        res.status(200).send(Users)
    } catch(err){
        next(err)
    }


}


// get User ======================

const getUser = async (req, res)=>{

    try{

        const User = await userModel.findById(req.params.id)
        res.status(200).send(User)
    } catch(err){
        res.status(500).json(err)
    }

}



module.exports = {updateUser , deleteUser, getAllUser , getUser}