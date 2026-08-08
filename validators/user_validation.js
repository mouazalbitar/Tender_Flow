const joi = require("joi");
const messages = require("./messages");

const user_schema = {
    org_id: joi.string().label("Organization ID"),
    role_id: joi.string().label("Role ID"),
    status: joi
        .string()
        .valid("PENDING", "ACTIVE", "REJECTED", "BANNED")
        .label("Status"),
    type: joi
        .string()
        .valid("PUBLISHER", "EXECUTOR", "SYSTEM_EMPLOYEE")
        .label("Type"),
    f_name: joi.string().min(2).max(30).trim().label("First Name"),
    l_name: joi.string().min(2).max(30).trim().label("Last Name"),
    father_name: joi.string().min(2).max(30).trim().label("Father's Name"),
    national_num: joi.string().min(9).max(11).label("National Number"),
    email: joi.string().email().label("Email"),
    phone: joi.string().label("Phone"),
    username: joi.string().min(3).max(30).trim().label("Username"),
    password: joi.string().min(6).max(30).label("Password"),
    device_token: joi.string().label("Device Token"),
};

function create_user_validation(obj) {
    const schema = joi
        .object({
            org_id: user_schema.org_id.optional(),
            role_id: user_schema.role_id.optional(),
            type: user_schema.type.required(),
            f_name: user_schema.f_name.required(),
            l_name: user_schema.l_name.optional(),
            father_name: user_schema.father_name.optional(),
            national_num: user_schema.national_num.required(),
            email: user_schema.email.optional(),
            phone: user_schema.phone.optional(),
            username: user_schema.username.required(),
            password: user_schema.password.required(),
            device_token: user_schema.device_token.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function create_mobile_user_validation(obj) {
    const schema = joi
        .object({
            org_id: user_schema.org_id.optional(),
            role_id: user_schema.role_id.optional(),
            f_name: user_schema.f_name.required(),
            l_name: user_schema.l_name.optional(),
            father_name: user_schema.father_name.optional(),
            national_num: user_schema.national_num.required(),
            email: user_schema.email.optional(),
            phone: user_schema.phone.optional(),
            username: user_schema.username.required(),
            password: user_schema.password.required(),
            device_token: user_schema.device_token.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function login_validation(obj) {
    const schema = joi
        .object({
            username: user_schema.username.required(),
            password: user_schema.password.required(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function update_user_validation(obj) {
    const schema = joi
        .object({
            org_id: user_schema.org_id.optional(),
            role_id: user_schema.role_id.optional(),
            f_name: user_schema.f_name.optional(),
            l_name: user_schema.l_name.optional(),
            father_name: user_schema.father_name.optional(),
            national_num: user_schema.national_num.optional(),
            email: user_schema.email.optional(),
            phone: user_schema.phone.optional(),
            username: user_schema.username.optional(),
            password: user_schema.password.optional(),
            device_token: user_schema.device_token.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function change_user_status_validation(obj) {
    const schema = joi
        .object({
            status: user_schema.status.required(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

module.exports = {
    create_user_validation,
    create_mobile_user_validation,
    login_validation,
    update_user_validation,
    change_user_status_validation,
};
