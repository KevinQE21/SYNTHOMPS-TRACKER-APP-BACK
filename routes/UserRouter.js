const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const { RegisterValidator } = require('../validators');
const validators = require('celebrate');
const { verifyToken } = require('../middlewares');

// Register - POST
router.post('/register', verifyToken, RegisterValidator, UserController.register);

// Register - PATCH
router.patch('/register', verifyToken, UserController.updateRegister);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;