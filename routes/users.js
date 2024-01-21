const express = require("express");
const userModel = require("../models/user_model.js");
const {getAllUser, getUser, updateUser, deleteUser} = require("../controllers/user_ctr.js");
const router = express.Router();
const {verifyToken, verifyAdmin, verifyUser} = require("../utils/verifyToken.js")



/* router.get("/authuser/:id", verifyUser , (req, res , next)=>{
    res.json("You are User !!")
} ) */

router.get("/authadmin/:id", verifyAdmin , (req, res , next)=>{
    res.json("  Yes, You are Admiin  !!")})


router.get("/all", verifyAdmin, getAllUser)

router.get("/:id" , verifyUser, getUser)

router.put("/:id", verifyUser, updateUser)

router.delete("/:id", verifyUser , deleteUser)



module.exports= router