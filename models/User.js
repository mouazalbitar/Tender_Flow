const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        org_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: false,
        },
        role_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: false,
        },
        status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "REJECTED", "BANNED"],
            default: "PENDING",
        },
        type: {
            type: String,
            enum: ["PUBLISHER", "EXECUTOR", "SYSTEM_EMPLOYEE"],
            required: true,
        },
        f_name: {
            type: String,
            required: true,
        },
        l_name: {
            type: String,
        },
        father_name: {
            type: String,
        },
        national_num: {
            type: String,
            required: true,
            unique: true,
            max: 11,
            min: 9,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        phone: {
            type: String,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 30,
            trim: true
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 30,
            trim: true,
            select: false
        },
        device_token: {
            type: String,
        },
    },
    { timestamps: true },
);

const User = mongoose.model("User", userSchema);
module.exports = {User};