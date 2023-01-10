const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')

const getSold = asyncHandler( async (req, res) => {

    const { CIN } = req.body
    
    const sold = await User.findOne({ CIN })
    console.log(sold)

    if(sold){
        res.json({ sold: sold.sold })
    }else{
        res.status(401).json({ message: 'invalid data' });
    }
})

module.exports = { getSold }