const express = require('express')
const musicRouter = express.Router()
const musicController = require('../controller/music.controller')
const albumController = require('../controller/music.controller')
const multer = require('multer')
const upload = multer({
   storage : multer.memoryStorage()
})
const authMiddlerware = require('../middlewares/auth.middleware')

musicRouter.post('/upload',authMiddlerware.authArtist ,upload.single("music"), musicController.createMusic)
musicRouter.post('/album',authMiddlerware.authArtist,musicController.createAlbum)
musicRouter.get('/',authMiddlerware.authUser, musicController.getAllMusics)
musicRouter.get('/album',authMiddlerware.authUser, musicController.getAllAlbum)
musicRouter.get('/album/:albumId',authMiddlerware.authUser, musicController.getAlbumById)
module.exports = musicRouter;