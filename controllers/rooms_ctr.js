const roomModel = require("../models/room_model.js");
const hotelModel = require("../models/hotel_model.js")



// Create room ================
const createRoom = async (req,res , next) =>{
    
    const _room = new roomModel(req.body)
    const hotel_id = req.params.hotelid
   try{

    const savedRoom = await _room.save()
    try{
       await hotelModel.findByIdAndUpdate(hotel_id, {$push:{rooms: savedRoom._id}})
    } catch(err){
        next(err)
    }

    res.status(200).json("saved Room  !! ")
   } catch(err){
    next(err)
   }
}


// Update room =======

const updateRoom = async (req, res, next)=>{

    try{

        const _room = await roomModel.findByIdAndUpdate(req.params._id, {$set : req.body} , {new: true})
        res.status(200).json("room updated !!")
    } catch(err){
        next(err)
    }
}

// Delete Room ============

const deleteRoom = async (req, res, next)=>{
     
    const hotel_id = req.params.hotelid

    try{
        try {
            const deleted_room = await  roomModel.findByIdAndDelete(req.params.id)
        res.status(200).json("room deleted !!")
         
        } catch(err){
            next(err)
        }
        const delete_room_hotel = await hotelModel.findByIdAndUpdate(hotel_id, {
            $pull :{ rooms : req.params.id}
        })
    }
 catch (err){
    next(err)
 }
}


// Get all Rooms ========================

const getAllRoom =  async (req, res, next)=>{
    
    /* const failed = true
    
    if(failed) {return next(createError(401 , "not authentificated to this "))} */

    try{
        const rooms = await roomModel.find()
        res.status(200).send(rooms)
    } catch(err){
        next(err)
    }


}


// get Room ======================

const getRoom = async (req, res)=>{

    try{

        const Room = await roomModel.findById(req.params.id)
        res.status(200).send(`Find one hotel : ${Room}`)
    } catch(err){
        res.status(500).json(err)
    }

}

module.exports= {createRoom, updateRoom, deleteRoom , getAllRoom , getRoom}
