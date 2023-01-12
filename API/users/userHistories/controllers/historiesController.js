const asyncHandler = require('express-async-handler')
const Histories = require('../models/historiesModel')
const User = require('../../userAuth/models/authModel')

const addHistory = asyncHandler(async (receiver_id, req, res) => {

    const history = await Histories.create({
        sender_id: req.user.id,
        reciever_id: receiver_id,
        virement: req.body.virement
    })

    if(history){
        res.status(201).json({
            message: 'passed succefuly',
        })
    }else{
        res.status(400)
        throw new Error('error')
    }
})

const getHistories = asyncHandler(async (req, res) => {
    const user_id = req.user.id
    const histories = (await Histories.find({ $or: [ {sender_id: user_id}, {reciever_id: user_id} ] }).sort({createdAt: 1})).reverse();
    // console.log(histories)
    res.json({ message: 'get Histories work succefully', histories: histories})
})

module.exports = { addHistory, getHistories }