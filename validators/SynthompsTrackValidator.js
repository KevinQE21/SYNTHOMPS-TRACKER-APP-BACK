const { celebrate, Joi, Segments } = require('celebrate');

const SynthompValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
            .email()
            .required(),
        comments: Joi.string()
            .required(),
        date: Joi.string()
            .required(),
        synthomp: Joi.string()
            .required(),
        intensity: Joi.string()
            .required(),
    })
});

module.exports = SynthompValidator;