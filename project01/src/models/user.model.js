const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        Unique : true
    },
    email : {
        type : String,
        Unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['user','artist'],
        default : 'user',   
    }
});

const userModel = mongoose.model("newuser", userSchema)

module.exports = userModel;