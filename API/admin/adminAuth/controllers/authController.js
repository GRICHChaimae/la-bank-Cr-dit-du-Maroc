const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const Admin = require('../models/authModel')
const { generateAccessToken } = require('../../../utils/generateToken')

const login = asyncHandler(async (req, res) =>  {
    const { email, password } = req.body

    if(!email || !password){
        res.status(400)
        res.json({
            message: 'Please add all fileds'
        })
    }

    const admin = await Admin.findOne({ email })

    if(admin && (await bcrypt.compare(password, admin.password))) {

        const accessToken = generateAccessToken(admin.id)
        res.json({
            message: 'admin logged succefully',
            accessToken: accessToken
        })
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }

})

module.exports = { login }