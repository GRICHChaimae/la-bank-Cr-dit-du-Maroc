const express = require('express')
const router = express.Router()
const { getClients, deleteClient, updateClient } = require('../controllers/clientsController')
const { register } = require('../../../users/userAuth/controllers/authController')

router.get('/clients', getClients).post('/addClient', register)
.delete('/deleteClient/:id', deleteClient).put('/editClient/:id', updateClient)

module.exports = router