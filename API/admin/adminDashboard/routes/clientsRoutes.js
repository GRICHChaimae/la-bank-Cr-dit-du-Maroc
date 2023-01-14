const express = require('express')
const router = express.Router()
const { getClients, deleteClient, updateClient , getOneClient} = require('../controllers/clientsController')
const { register } = require('../../../users/userAuth/controllers/authController')
const { protect } = require('../../adminAuth/middlewares/authMiddleware')

router.get('/clients', protect, getClients).post('/addClient', protect, register)
.delete('/deleteClient/:id', protect, deleteClient).put('/editClient/:id', updateClient).get('/oneClient/:id', protect, getOneClient)

module.exports = router