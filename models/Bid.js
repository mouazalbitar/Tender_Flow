const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema(
    {
        tender_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tender",
            required: true,
        },
        executor_org_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
        },
        offered_value: {
            type: Number,
            required: true,
            min: 0,
        },
        currency: {
            type: String,
            enum: ["SYP", "USD", "EUR"],
            required: true,
        },
        technical_proposal_file: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: [
                "SUBMITTED",
                "WITHDRAWN",
                "UNDER_REVIEW",
                "ACCEPTED",
                "REJECTED",
            ],
            default: "SUBMITTED",
            required: true,
        },
        submitted_at: {
            type: Date,
            default: Date.now,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
// Prevent one executor organization from submitting more than one bid for the same tender.
BidSchema.index(
    {
        tender_id: 1,
        executor_org_id: 1,
    },
    {
        unique: true,
    },
);

const Bid = mongoose.model("Bid", BidSchema);
module.exports = { Bid };
