const expess = require('express')
const router = expess.Router()
const { login } = require('../controllers/authController')

router.get('/login', login)

module.exports = router