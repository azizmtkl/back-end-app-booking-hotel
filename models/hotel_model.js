const mongoose = require("mongoose")
const {Schema , model} = require("mongoose")

const schemaHotels = new Schema({

    name :{
        type : String,
        required : true
    },
    type :{
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    adress :{
        type : String,
        required : true
    },
    distance :{
        type : String,
        required : true
    },
    photos :{
        type : [String],
    },
    title :{
        type : String,
        required: true
    },
    desc :{
        type : String,
        required: true
    },
    rating :{
        type : Number,
        min: 0,
        max : 5,
    },

    rooms :{
        type : [String],
        
    },
    cheapsetRoom :{
        type : Number,
        required: true
    },

    featured: {
        type : Boolean,
        default: false
    }

    

},{timestamps: true})


const hotelModel = model("hotels" , schemaHotels )

module.exports = hotelModel;

