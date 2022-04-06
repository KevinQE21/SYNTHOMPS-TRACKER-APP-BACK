const db = require('../db');

const getTrackSynthompsList = ( email ) => {
    return db
        .query(`SELECT U.id, U.intensity, U.comments, U.date, S.name FROM userinfo_synthomps_track AS U INNER JOIN userinfo_synthomps AS S ON U.userinfoid = S.userinfoid and U.synid = S.id WHERE U.userinfoid=$1`, [ email ])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const registerTrackSynthomp = ( email, intensity, comments, date, synthomp ) => {
    return db
        .query(`INSERT INTO userinfo_synthomps_track VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *`, [ intensity, comments, date, email, synthomp ])
        .then(result => result.rows)
        .catch(err => console.error(err.stack));
};

const deleteTrackSynthomp = ( id ) => {
    return db
        .query(`DELETE FROM userinfo_synthomps_track WHERE id=$1`, [ id ])
        .catch(err => console.error(err.stack));
};

module.exports = {
    getTrackSynthompsList,
    registerTrackSynthomp,
    deleteTrackSynthomp
};