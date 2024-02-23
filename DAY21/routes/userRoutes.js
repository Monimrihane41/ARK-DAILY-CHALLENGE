const express = require('express');
const userController = require('../controllers/userController');

const router2 = express.Router();

router2.post('/register', userController.register);
router2.post('/login', userController.login);


module.exports = router2;