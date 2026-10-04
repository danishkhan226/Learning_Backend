const express = require('express')
const { registerUserValidationRules } = require('./middlewares/validation.middleware')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hello World"
    })
})

app.post('/register', registerUserValidationRules, (req, res) => {
    const { username, email, password } = req.body;
    return res.status(201).json({
        message: 'user register successfully',
        user: {
            username,
            email,
            password
        }
    })
})

module.exports = app;