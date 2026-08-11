const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema(
    {
        org_name: {
            type: String,
            required: true,
        },
        _address: {
            type: String,
            required: true,
        },
        _type: {
            type: String,
            enum: ["PUBLISHER", "EXECUTOR", "SYSTEM"],
            required: true,
        },
        _status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "REJECTED", "BANNED"],
            default: "PENDING",
        },
        phone_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        logo: {
            type: String,
        },
    },
    { timestamps: true },
);

const Organization = mongoose.model("Organization", OrganizationSchema);
module.exports = {Organization};