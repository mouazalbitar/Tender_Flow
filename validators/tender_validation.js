const joi = require("joi");
const messages = require("./messages");

const tender_schema = {
    publisher_org_id: joi.string().label("Publisher Organization ID"),
    title: joi.string().min(3).max(200).trim().label("Tender Title"),
    description: joi
        .string()
        .min(10)
        .max(5000)
        .trim()
        .label("Tender Description"),
    reference_number: joi
        .string()
        .min(3)
        .max(50)
        .trim()
        .label("Reference Number"),
    status: joi
        .string()
        .valid("DRAFT", "PUBLISHED", "CLOSED", "AWARDED", "CANCELLED")
        .label("Status"),
    publication_date: joi.date().label("Publication Date"),
    submission_deadline: joi.date().label("Submission Deadline"),
    opening_date: joi.date().label("Opening Date"),
    estimated_budget: joi.number().positive().label("Estimated Budget"),
    currency: joi.string().min(3).max(10).trim().label("Currency"),
    location: joi.string().max(200).trim().label("Location"),
};

function create_tender_validation(obj) {
    const schema = joi
        .object({
            title: tender_schema.title.required(),
            description: tender_schema.description.required(),
            reference_number: tender_schema.reference_number.required(),
            publication_date: tender_schema.publication_date.required(),
            submission_deadline: tender_schema.submission_deadline.required(),
            opening_date: tender_schema.opening_date.required(),
            estimated_budget: tender_schema.estimated_budget.required(),
            currency: tender_schema.currency.required(),
            location: tender_schema.location.optional(),
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

module.exports = { create_tender_validation };
