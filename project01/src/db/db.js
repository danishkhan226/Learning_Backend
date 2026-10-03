const mongoose = require('mongoose');

async function ConnectDB(){
    try{
         await mongoose.connect(process.env.MONGO_URI)
         console.log('MongoDB Connected Successfully')
    } catch(err){
        console.log('MongoDB Connection Failed',err.message);
    }
}

module.exports = ConnectDB;