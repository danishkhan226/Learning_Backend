const express  = require('express')
const app = express()
app.use(express.json());
const cookieparser = require('cookie-parser')
app.use(cookieparser())
const authRoute = require('./routes/auth.route')
app.use('/api/auth', authRoute)
const musicRoute = require('./routes/music.route')
app.use('/api/music' , musicRoute)


module.exports = app