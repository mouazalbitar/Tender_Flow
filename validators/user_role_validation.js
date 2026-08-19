const Joi = require("joi");

const assign_role_validation = Joi.object({
    role_id: Joi.string().hex().length(24).required(),
});

const user_id_validation = Joi.object({
    id: Joi.string().hex().length(24).required(),
});

module.exports = {
    assign_role_validation,
    user_id_validation,
};