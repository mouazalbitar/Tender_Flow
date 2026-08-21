const mongoose = require("mongoose");

const TenderEvaluationSchema = new mongoose.Schema(
    {
        tender_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tender",
            required: true,
            unique: true,
        },

        recommended_bid_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bid",
            required: true,
        },

        evaluated_by: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],

        evaluated_at: {
            type: Date,
            default: Date.now,
            required: true,
        },

        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const TenderEvaluation = mongoose.model(
    "TenderEvaluation",
    TenderEvaluationSchema,
);

module.exports = { TenderEvaluation };