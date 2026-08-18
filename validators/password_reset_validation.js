const joi = require("joi");
const messages = require("./messages");

const reset_password_schema = joi
    .object({
        reset_token: joi
            .string()
            .hex()
            .length(64)
            .required()
            .label("Reset Token"),
        password: joi.string().min(6).max(30).required().label("New Password"),
        confirm_password: joi
            .any()
            .equal(joi.ref("password"))
            .required()
            .label("Confirm Password"),
    })
    .messages(messages.messages_en);

function reset_password_validation(obj) {
    return reset_password_schema.validate(obj);
}

module.exports = {
    reset_password_validation,
};
