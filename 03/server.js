const app = require('./src/app');
require('dotenv').config()
const ConnetDB = require('./src/db/db')

ConnetDB();
app.listen(3000, () => {
    console.log("server is running");
})