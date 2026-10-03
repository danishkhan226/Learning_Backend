const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')
async function userRegister(req,res){
     const {username , email , password, role ='user'} = req.body;

     const isUserAlreadyExist = await userModel.findOne({
        $or:[
          {username},
          {email}
        ]
     })

     if(isUserAlreadyExist){
          return res.status(409).json({
               Message : "User already exist"
          })
     }
        const hash =await bcryptjs.hash(password, 10);
     const user =await userModel.create({
          username,
          email,
          password : hash,
          role
     })

     const token = jwt.sign({
          id : user._id,
          role : user.role,
     },process.env.JWT_SECRET)

      res.cookie('token', token)     

     res.status(200).json({
          Message : "User SuccessFully Register",
          user : {
               id :user._id,
               username : user.username,
               email : user.email,
               role : user.role,
          }
     })
}

async function userLogin(req,res){
      const {username,email,password} = req.body;

      const user = await userModel.findOne({
          $or:[
               {username},
               {email}
          ]
      })

      if(!user){
          return res.status(401).json({
               message : "Invaild Credentials"  
          })
      }

      const ispasswordvalid = await bcryptjs.compare(password , user.password);

          if(!ispasswordvalid){
               return res.status(401).json({
                    message : "Invalid Cerdential"
               })
          }

          const token = jwt.sign({
              id : user._id,
              role : user.role
          },process.env.JWT_SECRET)

          res.cookie('token',token);

          res.status(200).json({
               message : "User login successfully",
               user :{
                    id : user._id,
                    username : user.username,
                    email : user.email,
                    role : user.role
               }
          })
}

async function userLogout(req,res){
     res.clearCookie("token")
     res.status(200).json({
          message : "user logout successfully"
     })
}

module.exports = {userRegister,  userLogin, userLogout}
