const { celebrate, Joi, Segments } = require('celebrate');

const UserValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        user: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/) //1 letra + 1 dígito + 1 caracter especial
            .required(),
        isDoctor: Joi.bool()      
    })
});

module.exports = UserValidator;