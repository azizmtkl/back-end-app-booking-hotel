const express = require("express");
const roomModel = require("../models/room_model.js");
const router = express.Router();
const {createRoom, updateRoom, deleteRoom , getAllRoom , getRoom} = require("../controllers/rooms_ctr.js");
const {verifyAdmin} = require("../utils/verifyToken.js");







// create Room ==================
router.post("/:hotelid" , verifyAdmin ,createRoom) 


// Update Room ===============
router.put("/:id" , verifyAdmin , updateRoom)



// Delete Room =================
router.delete("/:id/:hotelid" , verifyAdmin , deleteRoom)
 


// Get all Roooms  ======================
router.get("/all" , getAllRoom)


// Get Room ==================

router.get("/:id" , getRoom)




module.exports = router;
