const Joi = require("joi");

const objectId = Joi.string().hex().length(24);
const get_permissions_validation = Joi.object({
    module: Joi.string()
        .valid("TENDER", "BID", "USER", "REPORT", "SYSTEM", "ORG")
        .optional(),

    is_active: Joi.boolean().optional(),
});

const get_permission_validation = Joi.object({
    id: objectId.required(),
});

module.exports = {
    get_permissions_validation,
    get_permission_validation,
};
