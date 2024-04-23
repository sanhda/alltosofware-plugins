const Joi = require('joi');

const registerValidator = (data) => {
    const rule = Joi.object({
        username: Joi.string().min(6).max(225).required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().min(8).required(),
        email: Joi.string().min(6).max(225).required().email(),
    })

    return rule.validate(data);
}

module.exports.registerValidator = registerValidator;