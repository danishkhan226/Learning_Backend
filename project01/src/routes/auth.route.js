const express = require('express')
const authRouter = express.Router();
const authController = require('../controller/auth.controller')

authRouter.post('/register',authController.userRegister)
authRouter.post('/login' , authController.userLogin)
authRouter.post('/logout' , authController.userLogout)
module.exports = authRouter;