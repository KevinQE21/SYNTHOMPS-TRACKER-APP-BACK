/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users_auth', {
        email: { type: 'text', notNull: true, primaryKey: true},
        password: { type: 'text', notNull: true},
        isDoctor: { type: 'boolean'},
        hasInfoRegistered: {type: 'boolean'}
    });
    pgm.createTable('users_info', {
        email: { type: 'text', notNull: true, references: 'users_auth', primaryKey: true,},
        name: { type: 'text', notNull: true},
        lastname: { type: 'text', notNull: true},
        bloodtype: { type: 'text', notNull: true},
        weight: { type: 'text', notNull: true },
        height: { type: 'text', notNull: true },
        birthday: { type: 'date', notNull: true} 
    });
    pgm.createTable('synthomps', {
        id: { type: 'serial', primaryKey: true, notNull: true},
        name: { type: 'text', notNull: true},
        description: { type: 'text', notNull: true},
        image: {type: 'text'}
    });
    pgm.createTable('userinfo_synthomps', {
        id: { type: 'serial', primaryKey: true, notNull: true},
        name: { type: 'text', notNull: true},
        userinfoid: { type: 'text', notNull: true, references: 'users_info'},
    });
    pgm.createTable('userinfo_synthomps_track', {
        id: { type: 'serial', primaryKey: true, notNull: true },
        intensity: { type: 'text', notNull: true},
        comments: { type: 'text', notNull: false},
        date: { type: 'date', notNull: true},
        userinfoid: { type: 'text', notNull: true, references: 'users_info'},
        synid: { type: 'serial', notNull: true, references: 'userinfo_synthomps'},
    });    
};

exports.down = pgm => {};
