// REQUIREMENTS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// Homepage
app.get('/', (req, res) => {
    return res.send({ message: 'Hola a todos!' });
});

module.exports = app;