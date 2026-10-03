const mongoose = require('mongoose')

const albumSchema = mongoose.Schema({
    title : {
        type :String,
        required : true
    },

    musics :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "music"
        }
    ],
    artist : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "newuser",
        required : true,
    }]
})

const albumModel = mongoose.model("albums",albumSchema)

module.exports = albumModel