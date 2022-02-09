const db = require('../db');

const createUser = (user, password, isDoctor) => {

    return db
        .query(`INSERT INTO Users(name, password, isDoctor) VALUES($1, $2, $3) RETURNING *`, [user, password, isDoctor])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const verifyUser = (user) => {
    return db
        .query(`SELECT CASE WHEN EXISTS ( SELECT name FROM Users WHERE name = $1 ) THEN True ELSE False END`, [user])
        .then(result => result.rows[0].case)
        .catch(err => console.error(err.stack))
};

module.exports = {createUser, verifyUser};