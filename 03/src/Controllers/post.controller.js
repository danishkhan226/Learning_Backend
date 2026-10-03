const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')
async function createPost(req,res){
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({
         message : "unauthorized"
        })
    }

    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       const user = await userModel.findOne({
        _id : decoded.id
       })
       console.log(user);
    } catch(err){
        return res.status(401).json({
            Message : "Invalid Token"
        })
    }
    



    res.send("post create successfully")
}

module.exports = {createPost}