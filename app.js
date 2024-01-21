const express = require("express")
const app  = express()
const _PORT= process.env.PORT
const cors = require("cors")
const mongoose = require("mongoose")
const {createError} =require("./utils/error.js")
var jwt = require('jsonwebtoken');



const authRouter = require("./routes/auth.js")
const hotelsRouter = require("./routes/hotels.js")
const roomsRouter = require("./routes/rooms.js")
const usersRouter = require("./routes/users.js")
const cookieParser = require("cookie-parser")


// using cors and Json 



// =============  Connect to DB
const _username = process.env.USERNAME,
      _password = process.env.PASSWORD,
      _database = process.env.DATABASE

mongoose.set('strictQuery', true);  
const connect = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${_username}:${_password}@cluster0.bjlawtm.mongodb.net/${_database}?retryWrites=true&w=majority`)
        .then(()=>{
            console.log("connected to DB !!")
        })
    }   
     catch(error){
            throw error;
    }
}


// listen to PORT ======
app.listen(_PORT, ()=>{
    console.log("server Work !! ")
    console.log(`http://localhost:${_PORT}`)
    connect()
})


// Get Home Page =========

app.get("/", (req, res)=>{

    res.send("Hey Node.js")
})


// middlwares =====
app.use(cors())
app.use(express.json())

app.use(cookieParser())

app.use((req ,res , next)=>{
    console.log("I m iddlware")
    next()
})

app.use("/auth", authRouter)
app.use("/users" , usersRouter)
app.use("/hotels", hotelsRouter)


app.use("/rooms", roomsRouter)

app.use((err, req,res, next)=>{
  
    const errStatus = err.status
    const errMessage = err.message 
    return res.status(errStatus).json({
        succes : false,
        Error : errStatus,
        message : errMessage,
        stack : err.stack

    })
})