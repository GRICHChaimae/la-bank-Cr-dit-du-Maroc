const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const colors = require('colors')

connectDB()

const app = express()



app.listen(port, console.log(`Server runing on port ${port}`)) 