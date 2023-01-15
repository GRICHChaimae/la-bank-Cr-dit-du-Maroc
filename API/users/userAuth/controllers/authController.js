const { generateAccessToken , generateRefreshToken } = require('../../../utils/generateToken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require ('../models/authModel')


const accountNumber = () => {
    var numbers = '';
    while(numbers.length < 16){
        var r = Math.floor(Math.random() * 9) + 1;
        numbers += r;
    }
    return numbers;
}

const register = asyncHandler ( async (req, res) => {
    const { fname, lname, CIN, email, password } = req.body

    if(!fname || !lname || !CIN || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })
    const userCIN = await User.findOne({ CIN })

    if(userExists || userCIN) {
        res.status(400)
        throw new Error('User laready exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        fname,
        lname,
        CIN,
        email,
        password: hashedPassword,
        account_number: accountNumber()
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            first_name: user.fname,
            last_name: user.lname,
            cin : user.CIN
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = generateAccessToken(user.id, process.env.ACCESS_TOKEN_SECRET);
        res.json({ user_id: user.id, user_fname: user.fname, user_lname: user.lname , user_sold: user.sold, accessToken: accessToken });
    } else {
      // If the credentials are invalid, return an error
        res.status(401).json({ message: 'Invalid credentials' });
    }
})

module.exports = { register, login }