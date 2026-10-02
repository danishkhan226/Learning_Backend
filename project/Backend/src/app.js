const express = require('express');
const  postModel = require('./models/post.model')
const multer = require('multer');
const Uploadfile = require('../services/storage.service')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
const upload = multer({
    storage : multer.memoryStorage()
})

app.post("/create-post" , upload.single("image") , async(req,res) => {
       const result = await Uploadfile(req.file.buffer)

       const post = await postModel.create({
         Img_URL : result.url,
         Caption : req.body.caption
       })
      res.status(201).json({
        message : "Post create successfully",
        post  : post
       })
});

app.get("/posts" , async(req,res) => {
       const post = await  postModel.find();
       res.status(200).json({
          message: "data fetched successfully",
          post : post
       });
});

module.exports = app;

