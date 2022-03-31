const db = require('../db');

const createUser = (email, password, isDoctor, hasRegisterInfo) => {

    return db
        .query(`INSERT INTO users_auth VALUES ($1, $2, $3, $4) RETURNING *`, [email, password, isDoctor, hasRegisterInfo])
        .then(result => result.rows[0])
        .catch(err => console.error(err.stack));
};

const verifyUser = (email) => {
    return db
        .query(`SELECT CASE WHEN EXISTS ( SELECT email FROM users_auth WHERE email = $1 ) THEN True ELSE False END`, [email])
        .then(result => result.rows[0].case)
        .catch(err => console.error(err.stack))
};

const getUserByEmail = (email) => {
    return db
        .query(`SELECT * FROM users_auth WHERE email = $1`, [email])
        .then(result => result.rows[0])
        .catch(err => console.error(err.stack))
};

const updateUserAuth = (email) => {
    return db
        .query(`UPDATE users_auth SET "hasInfoRegistered"=True WHERE email = $1`, [email])
        .then(result => result.rows[0])
        .catch(err => console.error(err.stack))
};

module.exports = {createUser, verifyUser, getUserByEmail, updateUserAuth};