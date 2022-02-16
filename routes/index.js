//Importar los archivos creados de routes para ser exportados
const express = require('express');
const router = express.Router();
const AuthRouter = require('./AuthRouter');
const UserRoute = require('./UserRouter');
const validators = require('celebrate');

router.use('/auth', AuthRouter);

router.use('/user', UserRoute);

router.use(validators.errors());

module.exports = router;