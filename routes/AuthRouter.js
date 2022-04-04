const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
const { AuthValidator } = require('../validators');
const validators = require('celebrate');
const { verifyToken } = require('../middlewares');

// Register - POST
router.post('/register', AuthValidator, AuthController.register);

// Login - POST
router.post('/login', AuthValidator, AuthController.login);

// User Auth - POST
router.post('/user', verifyToken, AuthController.getUserAuth);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;