const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema(
    {
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
        publisher_org_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
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
            required: true,
        },
        type: {
            type: String,
            enum: ["PUBLIC", "LIMITED", "DIRECT"],
            required: true,
        },
        category: {
            type: String,
            enum: [
                "CONSTRUCTION", // إنشائية
                "ENGINEERING", // هندسية
                "IT", // تقنية معلومات
                "SUPPLY", // توريد
                "SERVICES", // خدمات
                "MAINTENANCE", // صيانة
                "CONSULTING", // استشارات
                "ENERGY", // طاقة
                "TRANSPORTATION", // نقل
                "MEDICAL", // طبية
                "OTHER", // أخرى
            ],
            required: true,
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
            enum: ["SYP", "USD", "EUR"],
            required: function () {
                return this.estimated_value != null;
            },
        },
        attachment_price: {
            type: Number,
            min: 0,
            default: 0,
        },
        execution_location: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const Tender = mongoose.model("Tender", TenderSchema);

module.exports = { Tender };
