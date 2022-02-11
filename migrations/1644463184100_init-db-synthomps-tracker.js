/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users_auth', {
        email: { type: 'text', notNull: true, primaryKey: true,},
        password: { type: 'text', notNull: true},
        isDoctor: { type: 'boolean'},
        hasInfoRegister: {type: 'boolean'}
    });
    pgm.createTable('users_info', {
        email: { type: 'text', notNull: true, references: 'users_auth', primaryKey: true,},
        name: { type: 'text', notNull: true},
        lastname: { type: 'text', notNull: true},
        bloodtype: { type: 'text', notNull: true},
        birthday: { type: 'timestamp', notNull: true}
    });
    pgm.createTable('synthomps', {
        id: { type: 'serial', primaryKey: true, notNull: true},
        name: { type: 'text', notNull: true}
    });
    pgm.createTable('userinfo_synthomps', {
        id: { type: 'serial', primaryKey: true, notNull: true },
        intensity: { type: 'text', notNull: true},
        comments: { type: 'text', notNull: false},
        intensity: { type: 'text', notNull: false},
        userinfoid: { type: 'text', notNull: true, references: 'users_info'},
        synid: { type: 'serial', notNull: true, references: 'synthomps'},
    });
    pgm.sql(
        `
            INSERT INTO synthomps (name) VALUES ('Dolor de Cabeza');
            INSERT INTO synthomps (name) VALUES ('Dolor de Estomago');
            INSERT INTO synthomps (name) VALUES ('Dolor de Espalda');
            INSERT INTO synthomps (name) VALUES ('Convulsiones');
            INSERT INTO synthomps (name) VALUES ('Vomito');
            INSERT INTO synthomps (name) VALUES ('Gastristis');
        `
    );
};

exports.down = pgm => {};
