const express = require('express');
const router = express.Router();

const {
    userLogin,
    userRegister
} = require('../controller/user')

// User login
router.post('/login', userLogin);

// User registration
router.post('/register', userRegister);

module.exports = router;
