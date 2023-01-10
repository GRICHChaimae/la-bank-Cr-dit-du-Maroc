const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        CIN: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        account_number: {
            type: Number,
            unique: true,
            required: true
        },
        sold: {
            type: Number,
            default: 1000,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema)