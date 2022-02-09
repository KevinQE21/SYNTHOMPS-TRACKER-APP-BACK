const { Pool } = require('pg');

const db = new Pool({
    user: process.env.PG_DATABASE_USERNAME,
    host: process.env.PG_DATABASE_HOSTNAME,
    database: process.env.PG_DATABASE_NAME,
    password: process.env.PG_DATABASE_PASSWORD,
    port: process.env.PG_DATABASE_PORT,
});

module.exports = db;