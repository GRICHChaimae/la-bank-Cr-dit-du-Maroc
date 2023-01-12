const mongoose = require('mongoose')

const historySchema = mongoose.Schema(
    {
        sender_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        reciever_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        virement: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            default: new Date().toLocaleString(),
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('history', historySchema)