const asynHnadler = require('express-async-handler')
const Client = require('../../../users/userAuth/models/authModel')

const getClients = asynHnadler(async (req, res) => {
    clients = await Client.find()
    res.status(200).json(clients)
})

const getOneClient = asynHnadler(async (req, res) => {
    oneClient = await Client.findById(req.params.id)
    res.status(201).json(oneClient)
})

const deleteClient = asynHnadler(async (req, res) => {
    const client = await Client.findById(req.params.id)

    if(!client) {
        res.status(400)
        throw new Error('Client not found')
    }

    await client.remove()

    res.status(200).json({id: req.params.id, message: 'client deleted succefully'})
})

const updateClient = asynHnadler(async (req, res) => {
    const client = Client.findById(req.params.id)

    if (!client) {
        res.status(400)
        throw new Error('Client not found')
    }

    const updateClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updateClient)
})

module.exports = { getClients, deleteClient, updateClient, getOneClient }