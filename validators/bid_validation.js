const joi = require("joi");
const messages = require("./messages");

const bid_schema = {
    tender_id: joi.string().label("Tender ID"),
    offered_value: joi.number().min(0).label("Offered Value"),
    currency: joi.string().valid("SYP", "USD", "EUR").label("Currency"),
    notes: joi.string().trim().max(2000).label("Notes"),
};

function create_bid_validation(obj) {
    const schema = joi
        .object({
            tender_id: bid_schema.tender_id.required(),
            offered_value: bid_schema.offered_value.required(),
            currency: bid_schema.currency.required(),
            notes: bid_schema.notes.optional(),
        })
        .messages(messages.messages_en);
    return schema.validate(obj);
}

module.exports = {
    create_bid_validation,
};
