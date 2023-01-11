const express = require('express')
const router = express.Router()
const { getSold, transferSold } = require('../controllers/soldController')
const { protect } = require('../middlewares/authMiddleware')

router.get('/sold', protect, getSold)
router.post('/sold_virement', protect, transferSold)

module.exports = router