const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken')
async function registerUser(req,res) {
   const {username, email, password} = req.body;

      const isUserAlreadyExist = await userModel.findOne({
      email
   }) 

   if(isUserAlreadyExist){
      return res.status(409).json({
         Message : "User already exist"
      })
   }

   const user = await userModel.create({
      username,email,password
   })


   
   const token = jwt.sign({
      id : user._id
   },process.env.JWT_SECRET)
 
   res.cookie("token" , token)

   res.status(200).json({
    Message : "user successfully signin",
    user
   })
}

module.exports = {registerUser};