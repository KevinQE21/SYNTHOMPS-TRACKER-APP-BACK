// REQUIREMENTS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const middlewares = require('./middlewares');

// SERVER SETTINGS + MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/v1', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;