const joi = require("joi");
const messages = require("./messages");

const tender_schema = {
    title: joi.string().min(3).max(200).label("Tender Title"),
    description: joi.string().min(10).label("Tender Description"),
    type: joi
        .string()
        .valid("PUBLIC", "LIMITED", "DIRECT")
        .label("Tender Type"),
    status: joi
        .string()
        .valid(
            "DRAFT",
            "PUBLISHED",
            "OPEN",
            "CLOSED",
            "REPUBLISHED",
            "AWARDED",
            "CANCELLED",
        )
        .label("Tender Status"),
    published_at: joi.date().label("Published At"),
    submission_start: joi.date().label("Submission Start"),
    submission_deadline: joi
        .date()
        .greater(joi.ref("submission_start"))
        .label("Submission Deadline"),
    estimated_value: joi.number().min(0).label("Estimated Value"),
    currency: joi.string().valid("SYP", "USD", "EUR").label("Currency"),
    execution_location: joi
        .string()
        .min(3)
        .max(200)
        .label("Execution Location"),
};

function create_tender_validation(obj) {
    const schema = joi
        .object({
            title: tender_schema.title.required(),
            description: tender_schema.description.required(),
            type: tender_schema.type.required(),
            submission_start: tender_schema.submission_start.required(),
            submission_deadline: tender_schema.submission_deadline.required(),
            estimated_value: tender_schema.estimated_value.optional(),
            currency: tender_schema.currency.optional(),
            execution_location: tender_schema.execution_location.required(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

function update_tender_validation(obj) {
    const schema = joi
        .object({
            title: tender_schema.title.optional(),
            description: tender_schema.description.optional(),
            type: tender_schema.type.optional(),
            submission_start: tender_schema.submission_start.optional(),
            submission_deadline: tender_schema.submission_deadline.optional(),
            estimated_value: tender_schema.estimated_value.optional(),
            currency: tender_schema.currency.optional(),
            execution_location: tender_schema.execution_location.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

module.exports = {
    create_tender_validation,
    update_tender_validation,
};
