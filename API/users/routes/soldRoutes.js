const express = require('express')
const router = express.Router()
const { getSold } = require('../controllers/soldController')

router.get('/sold', getSold)

module.exports = router