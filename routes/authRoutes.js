const express = require('express');
const router = express.Router();
const { register, login, refreshToken } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

module.exports = router;