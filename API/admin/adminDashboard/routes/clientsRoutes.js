const express = require('express')
const router = express.Router()
const { getClients, deleteClient, updateClient } = require('../controllers/clientsController')
const { register } = require('../../../users/userAuth/controllers/authController')
const { protect } = require('../../adminAuth/middlewares/authMiddleware')

router.get('/clients', protect, getClients).post('/addClient', protect, register)
.delete('/deleteClient/:id', protect, deleteClient).put('/editClient/:id', protect, updateClient)

module.exports = router