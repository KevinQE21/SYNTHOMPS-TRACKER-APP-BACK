//Importar los archivos creados de routes para ser exportados
const express = require('express');
const router = express.Router();
const AuthRouter = require('./AuthRouter');
const UserRouter = require('./UserRouter');
const SynthompsRouter = require('./SynthompsRouter');
const SynthompsTrackRouter = require('./SynthompsTrackRouter');
const validators = require('celebrate');

router.use('/auth', AuthRouter);

router.use('/user', UserRouter);

router.use('/synthomps', SynthompsRouter);

router.use('/track', SynthompsTrackRouter);

router.use(validators.errors());

module.exports = router;