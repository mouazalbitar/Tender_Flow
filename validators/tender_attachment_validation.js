const joi = require("joi");
const messages = require("./messages");

const tender_attachment_schema = {
    type: joi
        .string()
        .valid(
            "TECHNICAL_CONDITIONS",
            "FINANCIAL_CONDITIONS",
            "ADMINISTRATIVE_CONDITIONS",
            "QUANTITY_SCHEDULE",
            "OTHER",
        )
        .label("Attachment Type"),
    name: joi.string().min(3).max(200).trim().label("Attachment Name"),
    description: joi
        .string()
        .max(1000)
        .trim()
        .allow("")
        .label("Attachment Description"),
};

function create_tender_attachment_validation(obj) {
    const schema = joi
        .object({
            type: tender_attachment_schema.type.required(),
            name: tender_attachment_schema.name.required(),
            description: tender_attachment_schema.description.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

module.exports = {
    create_tender_attachment_validation,
};
