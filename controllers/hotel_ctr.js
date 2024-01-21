const hotelModel = require("../models/hotel_model.js");
const { createError } = require("../utils/error.js"); 



// Create Hotel ===================

const createHotel = async (req, res)=>{

    const newHotel = new hotelModel(req.body)
    try{

        const savedHotel= await newHotel.save()
        res.status(200).send("saved hotel !")


    } catch(err){
        res.status(500).json(err)
    }
}



// Update Hotel ====================

const updateHotel = async (req, res)=>{

    try{

        const updatedHotel= await hotelModel.findByIdAndUpdate(req.params.id , 
            {$set : req.body}, 
            {new : true})
        res.status(200).send("Updated hotel !")


    } catch(err){
        res.status(500).json(err)
    }

}



// delete Hotel  ============================= 

const deleteHotel = async (req, res)=>{

    try{

        const deletedHotel= await hotelModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted hotel !")


    } catch(err){
        res.status(500).json(err)
    }

}

// Get all hotel ========================

const getAllHotel =  async (req, res, next)=>{
    
    /* const failed = true
    
    if(failed) {return next(createError(401 , "not authentificated to this "))} */

    try{
        const Hotels = await hotelModel.find()
        res.status(200).send(Hotels)
    } catch(err){
        next(err)
    }


}


// get Hotel ======================

const getHotel = async (req, res)=>{

    try{

        const Hotel= await hotelModel.findById(req.params.id)
        res.status(200).send("Find one hotel")
    } catch(err){
        res.status(500).json(err)
    }

}



module.exports = {createHotel, updateHotel , deleteHotel, getAllHotel , getHotel}