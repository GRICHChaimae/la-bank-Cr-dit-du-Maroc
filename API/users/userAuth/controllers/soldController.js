const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')
const { addHistory } = require('../../userHistories/controllers/historiesController')

const getSold = asyncHandler( async (req, res) => {
    const user = await User.findById(req.user.id)
    res.json({sold: user.sold})
})

const transferSold = asyncHandler( async (req, res) => {

    const user = await User.findById(req.user.id)

    const { account_number, virement } = req.body

    const receiver = await User.findOne({ account_number })

    const sold = user.sold
    const receiver_sold = receiver.sold

    if(!receiver){
        res.json({
            message: 'There is no user has this number account'
        })
    }else{
        if(virement > sold) {
            res.json({
                message: "You can not do this operation, your sold is not enough"
            })
        }else{
            const newSoldReciever = receiver_sold + virement
            const  newSoldSender = sold - virement

            const updateRecieverSold = await User.findByIdAndUpdate(receiver.id, {sold: newSoldReciever} , {
                new: true,
            })

            const updateSenderSold = await User.findByIdAndUpdate(req.user.id, {sold: newSoldSender} , {
                new: true,
            })

            const addHistories = await addHistory(receiver.id, req, res)
        }
    }
})


module.exports = { getSold, transferSold }
