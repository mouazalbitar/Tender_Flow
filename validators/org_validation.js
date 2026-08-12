const joi = require("joi");
const messages = require("./messages");

const org_schema = {
    org_name: joi.string().min(3).max(50).label("Organization Name"),
    _address: joi.string().min(5).max(100).label("Address"),
    _type: joi
        .string()
        .valid("PUBLISHER", "EXECUTOR", "SYSTEM")
        .label("Organization Type"),
    _status: joi
        .string()
        .valid("PENDING", "ACTIVE", "REJECTED", "BANNED")
        .label("Status"),
    phone_number: joi.string().label("Phone Number"),
    email: joi.string().email().label("Email"),
    logo: joi.string().label("Logo"),
    commercial_register: joi.string().label("Commercial Register"),
    license: joi.string().label("License")
};

function create_org_validation(obj) {
    const schema = joi
        .object({
            org_name: org_schema.org_name.required(),
            _address: org_schema._address.required(),
            phone_number: org_schema.phone_number.required(),
            email: org_schema.email.required(),
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
        })
        .messages(messages.messages_en);
    return schema.validate(obj);
}

module.exports = {
    create_org_validation,
    update_org_validation,
};
