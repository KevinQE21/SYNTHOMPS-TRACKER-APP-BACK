const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { UsersValidator } = require('../validators');
const validators = require('celebrate');

// Register - POST
router.post('/register', UsersValidator.createUser, AuthController.register);

// Login - POST
router.post('/login', AuthController.login);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;