const express = require('express');
const postRouter = express.Router();
const postController = require('../Controllers/post.controller')

postRouter.post('/create', postController.createPost );
module.exports = postRouter;