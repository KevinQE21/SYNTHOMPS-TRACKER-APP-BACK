const { celebrate, Joi, Segments } = require('celebrate');

const UsersValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
            .required(),
        name: Joi.string()
            .required(),
        lastName: Joi.string()
            .required(),
        bloodType: Joi.string()
            .required(),
        birthday: Joi.string()
            .required(),
        weight: Joi.string()
            .required(),
        height: Joi.string()
            .required(),             
    })
});

module.exports = UsersValidator;