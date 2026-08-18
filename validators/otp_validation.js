const joi = require("joi");
const messages = require("./messages");

const otp_request_schema = joi
    .object({
        phone: joi
            .string()
            .pattern(/^\+9639\d{8}$/)
            .length(13)
            .required()
            .label("Phone"),
    })
    .messages(messages.messages_en);

const otp_verify_schema = joi
    .object({
        username: joi
            .string()
            .required()
            .label("Username"),
        otp: joi
            .string()
            .pattern(/^\d{6}$/)
            .required()
            .label("OTP"),
    })
    .messages(messages.messages_en);

function request_otp_validation(obj) {
    return otp_request_schema.validate(obj);
}

function verify_otp_validation(obj) {
    return otp_verify_schema.validate(obj);
}

module.exports = {
    request_otp_validation,
    verify_otp_validation,
};