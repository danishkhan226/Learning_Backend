const ImageKit = require('@imagekit/nodejs');

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function Uploadfile(buffer) {
    const result = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}
module.exports = Uploadfile;