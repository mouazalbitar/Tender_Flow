const Joi = require("joi");

const create_role_validation = Joi.object({
    code: Joi.string().trim().min(2).max(100).uppercase().required(),
    name: Joi.string().trim().min(2).max(100).required(),
    name_ar: Joi.string().trim().min(2).max(100).optional(),
    description: Joi.string().trim().max(500).optional(),
    permissions: Joi.array()
        .items(Joi.string().hex().length(24))
        .unique()
        .optional(),
    is_active: Joi.boolean().optional(),
}).options({
    allowUnknown: false,
});

const update_role_validation = Joi.object({
    code: Joi.string().trim().min(2).max(100).uppercase().optional(),
    name: Joi.string().trim().min(2).max(100).optional(),
    name_ar: Joi.string().trim().min(2).max(100).optional(),
    description: Joi.string().trim().max(500).optional(),
    permissions: Joi.array()
        .items(Joi.string().hex().length(24))
        .unique()
        .optional(),
    is_active: Joi.boolean().optional(),
})
    .min(1)
    .options({
        allowUnknown: false,
    });

const get_role_validation = Joi.object({
    id: Joi.string().hex().length(24).required(),
}).options({
    allowUnknown: false,
});

const add_permission_to_role_validation = Joi.object({
    permission_id: Joi.string().hex().length(24).required(),
}).options({
    allowUnknown: false,
});

const remove_permission_from_role_validation = Joi.object({
    role_id: Joi.string().hex().length(24).required(),
    permission_id: Joi.string().hex().length(24).required(),
}).options({
    allowUnknown: false,
});

module.exports = {
    create_role_validation,
    update_role_validation,
    get_role_validation,
    add_permission_to_role_validation,
    remove_permission_from_role_validation,
};
