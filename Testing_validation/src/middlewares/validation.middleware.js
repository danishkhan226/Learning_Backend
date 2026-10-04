const {body , validationResult} = require('express-validator');

async function validateResult(req,res,next){
     const errors = validationResult(req)
     if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
     }
     next()
}

const registerUserValidationRules =[
    body("username").isString().withMessage("Username must be a String").isLength({min : 3 , max : 20}).withMessage("Username must be between 3 to 20 Characters long "),
    body("email").isEmail().withMessage("Invaild email address"),
    body("password").isLength({min : 6}).withMessage("Password must be 6 characters long"),
    validateResult
]

module.exports = {registerUserValidationRules};