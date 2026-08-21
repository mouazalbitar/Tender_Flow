const mongoose = require("mongoose");

const TenderPurchaseSchema = new mongoose.Schema(
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
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        currency: {
            type: String,
            enum: ["SYP", "USD", "EUR"],
            required: true,
        },
        payment_status: {
            type: String,
            enum: ["PAID"],
            default: "PAID",
        },
        paid_at: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

TenderPurchaseSchema.index(
    {
        tender_id: 1,
        executor_org_id: 1,
    },
    {
        unique: true,
    },
);

const TenderPurchase = mongoose.model("TenderPurchase", TenderPurchaseSchema);
module.exports = { TenderPurchase };
