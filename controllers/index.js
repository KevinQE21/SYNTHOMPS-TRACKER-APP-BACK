//Importar los archivos creados de controllers para ser exportados
const AuthController = require('./AuthController');
const UserController = require('./UserController');
const SynthompsController = require('./SynthompsController');

module.exports = { AuthController, UserController, SynthompsController };