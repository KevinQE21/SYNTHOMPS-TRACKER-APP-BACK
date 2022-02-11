//Importar los archivos creados de middlewares para ser exportados
const verifyToken = require('./VerifyToken');
const notFound = require('./NotFound');
const errorHandler = require('./ErrorHandler');

module.exports = { verifyToken, notFound, errorHandler };