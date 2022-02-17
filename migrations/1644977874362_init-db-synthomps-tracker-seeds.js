/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
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
