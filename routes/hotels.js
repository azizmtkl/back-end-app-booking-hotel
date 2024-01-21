const express = require("express");
const hotelModel = require("../models/hotel_model.js");
const router = express.Router();
const { createError } = require("../utils/error.js"); 
const {createHotel, updateHotel , deleteHotel, getAllHotel , getHotel} = require("../controllers/hotel_ctr.js");
const {verifyToken, verifyAdmin, verifyUser} = require("../utils/verifyToken.js");


// create Hotel
router.post("/" , verifyAdmin ,createHotel) 

// Update Hotel
router.put("/:id" , verifyAdmin , updateHotel)


// Delete Hotel
router.delete("/:id" , verifyAdmin , deleteHotel)


// Get all Hotels 
router.get("/all" , getAllHotel)


// Get Hotel 

router.get("/:id" , getHotel)




module.exports = router;
