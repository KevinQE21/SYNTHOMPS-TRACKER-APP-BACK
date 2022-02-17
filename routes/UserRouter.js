const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const { UsersValidator } = require('../validators');
const validators = require('celebrate');
const { verifyToken } = require('../middlewares');

// Register - POST
router.post('/register', verifyToken, UsersValidator, UserController.registerUserInfo);

// Register - PATCH
router.patch('/register', verifyToken, UserController.updateUserInfo);

// Register - GET
router.get('/register', verifyToken, UserController.getUserInfo);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;