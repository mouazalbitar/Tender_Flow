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

        submitted_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        bid_amount: {
            type: Number,
            required: true,
            min: 0,
        },

        technical_proposal: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: [
                "SUBMITTED",
                "UNDER_REVIEW",
                "ACCEPTED",
                "REJECTED",
                "WITHDRAWN",
            ],
            default: "SUBMITTED",
        },

        submitted_at: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

const Bid = mongoose.model("Bid", BidSchema);

module.exports = { Bid };