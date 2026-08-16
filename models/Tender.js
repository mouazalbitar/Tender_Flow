const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema(
    {
        tender_number: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 200,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        publisher_org_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
        },

        type: {
            type: String,
            required: true,
            enum: [
                "PUBLIC",
                "LIMITED",
                "DIRECT",
            ],
        },

        status: {
            type: String,
            enum: [
                "DRAFT",
                "PUBLISHED",
                "OPEN",
                "CLOSED",
                "REPUBLISHED",
                "AWARDED",
                "CANCELLED",
            ],
            default: "DRAFT",
        },

        published_at: {
            type: Date,
        },

        submission_start: {
            type: Date,
            required: true,
        },

        submission_deadline: {
            type: Date,
            required: true,
        },

        estimated_value: {
            type: Number,
            min: 0,
        },

        currency: {
            type: String,
            trim: true,
        },

        execution_location: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },
    },
    {
        timestamps: true,
    }
);

const Tender = mongoose.model("Tender", tenderSchema);

module.exports = Tender;