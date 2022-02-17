const express = require('express');
const router = express.Router();
const { SynthompsController } = require('../controllers');
const validators = require('celebrate');
const { SynthompValidator } = require('../validators');
const { verifyToken } = require('../middlewares');

// Default Synthomps - GET
router.get('/', verifyToken, SynthompsController.getSynthomps);

// Register User Synthomps - POST
router.post('/', verifyToken, SynthompsController.registerUserSynhtomps);

// Register User Synthomps - POST
router.post('/userSynthomps', SynthompValidator, verifyToken, SynthompsController.registerUserNewSynhtomp);

// User Synthomps - GET
router.get('/userSynthomps', verifyToken, SynthompsController.getUserSynthomps);

// User Synthomps - Delete
router.delete('/userSynthomps', verifyToken, SynthompsController.deleteUserSynthomps);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;