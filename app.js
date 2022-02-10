// REQUIREMENTS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/v1', routes);

module.exports = app;