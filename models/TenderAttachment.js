const mongoose = require("mongoose");

const TenderAttachmentSchema = new mongoose.Schema(
    {
        tender_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tender",
            required: true,
        },
        type: {
            type: String,
            enum: [
                "TECHNICAL_CONDITIONS",
                "FINANCIAL_CONDITIONS",
                "ADMINISTRATIVE_CONDITIONS",
                "QUANTITY_SCHEDULE",
                "OTHER",
            ],
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        file_path: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const TenderAttachment = mongoose.model(
    "TenderAttachment",
    TenderAttachmentSchema,
);

module.exports = { TenderAttachment };
