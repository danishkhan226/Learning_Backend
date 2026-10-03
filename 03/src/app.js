const express = require('express')
const app = express();
app.use(express.json());
const cookieparser = require('cookie-parser')
app.use(cookieparser())
const authRoutes = require('./routes/auth.routes')
app.use('/api/auth', authRoutes)
const postRoute = require('./routes/post.routes')
app.use('/api/post', postRoute)





module.exports = app;