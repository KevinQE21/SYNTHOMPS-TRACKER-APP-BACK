const express = require('express');
const router = express.Router();
const { SynthompsTrackController } = require('../controllers');
const validators = require('celebrate');
const { verifyToken } = require('../middlewares');

// Default Synthomps - GET
router.get('/', verifyToken, SynthompsTrackController.getTrackSynthomps);

// Register User Synthomps - POST
router.post('/', verifyToken, SynthompsTrackController.registerTrackSynhtomps);

// User Synthomps - Delete
router.delete('/', verifyToken, SynthompsTrackController.deleteTrackSynthomps);

//Manejador de error de validators
router.use(validators.errors());

module.exports = router;