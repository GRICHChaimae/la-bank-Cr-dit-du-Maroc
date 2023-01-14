const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middlewares/errorMiddleware')
const port = process.env.PORT || 5000
const colors = require('colors')


connectDB()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use('/api/users', require('./users/userAuth/routes/authRoutes'))
app.use('/api/client', require('./users/userAuth/routes/soldRoutes'))
app.use('/api/histories', require('./users/userHistories/routes/historiesRoures'))

app.use('/api/admin', require('./admin/adminAuth/routes/authRoutes'))
app.use('/api/dashboard', require('./admin/adminDashboard/routes/clientsRoutes'))


app.use(errorHandler)
app.listen(port, console.log(`Server runing on port ${port}`))