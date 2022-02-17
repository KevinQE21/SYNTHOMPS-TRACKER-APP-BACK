const db = require('../db');

const createUserInfoRegister = (email, name, lastName, bloodType, birthday, weight, height) => {
    return db
        .query(`INSERT INTO users_info VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [email, name, lastName, bloodType, weight, height, birthday])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const verifyUserInfoRegister = (email) => {
    return db
        .query(`SELECT CASE WHEN EXISTS ( SELECT email FROM users_info WHERE email = $1 ) THEN True ELSE False END`, [email])
        .then(result => result.rows[0].case)
        .catch(err => console.error(err.stack));
};

const getUserInfoByEmail = (email) => {
    return db
        .query(`SELECT * FROM users_info WHERE email = $1`, [email])
        .then(result => result.rows[0])
        .catch(err => console.error(err.stack));
};

const updateUserInfoRegister = (email, weight) => {
    return db
        .query(`UPDATE users_info SET weight=$1 WHERE email = $2 RETURNING *`, [weight, email])
        .then(result => result.rows[0])
        .catch(err => console.error(err.stack));
};

module.exports = {
    createUserInfoRegister,
    verifyUserInfoRegister,
    getUserInfoByEmail,
    updateUserInfoRegister,
};