const { signup, login, logout } = require('../controllers/auth.controller');
const express = require('express');

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;