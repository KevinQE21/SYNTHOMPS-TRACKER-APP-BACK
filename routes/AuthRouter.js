const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');

// AUTH Usuarios
// Register - POST
router.post('/register', AuthController.register);

// Login - POST
router.post('/login', AuthController.login);

module.exports = router;