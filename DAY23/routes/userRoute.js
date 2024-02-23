const router = require('express').Router();
const { register, login, protectedRoute, logout } = require('../controllers/userController');


router.post('/register', register)

router.post('/login', login)
router.get('/protected', protectedRoute)
router.post('/logout', logout)

module.exports = router;