const joi = require("joi");
const messages = require("./messages");

const org_schema = {
    org_name: joi.string().min(3).max(50).label("Organization Name"),
    _address: joi.string().min(5).max(100).label("Address"),
    _type: joi
        .string()
        .valid("PUBLISHER", "EXECUTOR", "SYSTEM")
        .label("Organization Type"),
    phone_number: joi.string().label("Phone Number"),
    email: joi.string().email().label("Email"),
    commercial_register_num: joi
        .string()
        .min(3)
        .max(8)
        .label("Commercial Register Number"),
    commercial_register_date: joi.date().label("Commercial Register Date"),
    license_num: joi.string().min(3).max(8).label("License Number"),
    license_date: joi.date().label("License Date"),
};

function create_org_validation(obj) {
    const schema = joi
        .object({
            org_name: org_schema.org_name.required(),
            _address: org_schema._address.required(),
            phone_number: org_schema.phone_number.required(),
            email: org_schema.email.required(),
            commercial_register_num: org_schema.commercial_register_num.required(),
            commercial_register_date: org_schema.commercial_register_date.required(),
            license_num: org_schema.license_num.required(),
            license_date: org_schema.license_date.required(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function update_org_validation(obj) {
    const schema = joi
        .object({
            org_name: org_schema.org_name.optional(),
            _address: org_schema._address.optional(),
            phone_number: org_schema.phone_number.optional(),
            email: org_schema.email.optional(),
            commercial_register_num: org_schema.commercial_register_num.optional(),
            commercial_register_date: org_schema.commercial_register_date.optional(),
            license_num: org_schema.license_num.optional(),
            license_date: org_schema.license_date.optional(),
        })
        .messages(messages.messages_en);
    return schema.validate(obj);
}

module.exports = {
    create_org_validation,
    update_org_validation,
};
