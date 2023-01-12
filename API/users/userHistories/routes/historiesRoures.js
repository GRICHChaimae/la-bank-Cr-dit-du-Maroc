const express = require('express')
const router = express.Router()
const { getHistories } = require('../controllers/historiesController')
const { protect } = require('../../userAuth/middlewares/authMiddleware')


router.get('/histories', protect, getHistories)

module.exports = router