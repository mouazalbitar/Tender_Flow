const joi = require("joi");
const messages = require("./messages");

const bid_schema = {
    bid_amount: joi.number().min(0).required().label("Bid Amount"),
    technical_proposal: joi
        .string()
        .min(10)
        .required()
        .label("Technical Proposal"),
};

function create_bid_validation(obj) {
    const schema = joi
        .object({
            bid_amount: bid_schema.bid_amount,
            technical_proposal: bid_schema.technical_proposal,
        })
        .messages(messages.messages_en);

    return schema.validate(obj);
}

module.exports = {
    create_bid_validation,
};
