const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')

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

            console.log(newSoldReciever)
            console.log(newSoldSender)
        }
    }

    res.json({message: 'passed succefuly'})
})


module.exports = { getSold, transferSold }
