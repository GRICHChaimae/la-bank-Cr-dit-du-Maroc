const expess = require('express')
const router = expess.Router()
const { login } = require('../controllers/authController')

router.post('/login', login)

module.exports = router