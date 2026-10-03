const Imagekit = require('@imagekit/nodejs');

const client = new Imagekit({
 privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file){
    const result = await client.files.upload({
        file,
        fileName : "music_" + Date.now(),
        folder: "My_music/music"
    })
    return result;
}

module.exports = uploadFile;