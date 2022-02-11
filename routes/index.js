//Importar los archivos creados de routes para ser exportados
const express = require('express');
const router = express.Router();
const AuthRouter = require('./AuthRouter');
const validators = require('celebrate');

router.use('/auth', AuthRouter);

router.use(validators.errors());

module.exports = router;