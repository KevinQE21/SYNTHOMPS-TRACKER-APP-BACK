const { celebrate, Joi, Segments } = require('celebrate');

const SynthompValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
            .email()
            .required(),
        name: Joi.string()
            .required(),
        image: Joi.string()
    })
});

module.exports = SynthompValidator;