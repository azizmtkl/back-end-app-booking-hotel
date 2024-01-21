const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) =>{

    const token = req.cookies.access_token;

    if(!token){
        return next( res.json("You are not authenticated !!"))  }

    jwt.verify(token, process.env.SECRET ,  (err, user)=>{

        if (err) return next (res.json(" token is not valid !")) 

        req.user = user;
        next()
    })

}


const verifyUser = (req,res,next) =>{
    verifyToken(req, res, next, ()=>{
        
        console.log(req.user)
        if(req.user.id = req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.json("You are a good User !!")
        }

    })



}


const verifyAdmin = (req,res,next) =>{
    verifyToken(req, res, next ,  ()=>{
        
        console.log(req.user)
        if(req.user.isAdmin){
            next()
        }
        else{
            res.json("You are not Admin !!")
        }

    })


}

module.exports = {verifyToken, verifyAdmin, verifyUser}