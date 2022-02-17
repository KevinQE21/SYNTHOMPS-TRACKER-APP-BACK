const db = require('../db');

const getSynthompsList = () => {
    return db
        .query(`SELECT * FROM synthomps`)
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const getUserSynthompsList = ( email ) => {
    return db
        .query(`SELECT * FROM userinfo_synthomps WHERE userinfoid=$1`, [ email ])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const registerUserSynthomp = ( email, name, image ) => {
    return db
        .query(`INSERT INTO userinfo_synthomps VALUES (DEFAULT, $1, $2, $3) RETURNING *`, [ name, image, email ])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const deleteUserSynthomp = ( id ) => {
    return db
        .query(`DELETE FROM userinfo_synthomps WHERE id=$1`, [ id ])
        .catch(err => console.error(err.stack));
};

module.exports = {
    getSynthompsList,
    getUserSynthompsList,
    registerUserSynthomp,
    deleteUserSynthomp
};