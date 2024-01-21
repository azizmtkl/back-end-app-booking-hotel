const mongoose = require("mongoose")
const {Schema , model} = require("mongoose")

const schemaUser = new Schema({

    username :{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    password :{
        type : String,
        required : true
    },
    isAdmin :{
        type : Boolean,
        default: false
    }

},{timestamps: true})


const userModel = model("users" , schemaUser )

module.exports = userModel;

