const mongoose = require("mongoose")
const {Schema , model} = require("mongoose")

const schemaRoom = new Schema({

    title:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    maxPeople :{
        type : Number,
        required : true
    },
    desc :{
        type : String,
        default: false
    },
    roomNumbers : [{ number: Number , unavailabledates: [{type : [Date]}]}]

},{timestamps: true})


const roomModel = model("rooms" , schemaRoom )

module.exports = roomModel;

