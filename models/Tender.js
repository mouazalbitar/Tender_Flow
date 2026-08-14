const { valid } = require("joi");
const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema(
    {
        publisher_org_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        reference_number: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["DRAFT", "PUBLISHED", "CLOSED", "AWARDED", "CANCELLED", "RENEWED"],
            default: "DRAFT",
        },
        publication_date: {
            type: Date,
            required: true,
        },
        submission_deadline: {
            type: Date,
            required: true,
        },
        opening_date: {
            type: Date,
            required: true,
        },
        estimated_budget: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            enum: ["USD", "SYP", "EUR"],
            required: true,
        },
        location: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true },
);

const Tender = mongoose.model("Tender", tenderSchema);
module.exports = { Tender };
