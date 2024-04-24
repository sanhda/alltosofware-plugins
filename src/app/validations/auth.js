const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

const registerValidator = (data) => {
    const rule = Joi.object({
        username: Joi.string().min(6).max(20).required(),
        password: joiPassword.string()
                    .min(8)
                    .required()
                    .noWhiteSpaces()
                    .onlyLatinCharacters()
                    .minOfSpecialCharacters(1)
                    .minOfLowercase(1)
                    .minOfUppercase(1)
                    .minOfNumeric(1),
        confirmPassword: Joi.string().min(8).required(),
        email: Joi.string().min(6).max(225).required().email(),
    })

    return rule.validate(data);
}

module.exports.registerValidator = registerValidator;