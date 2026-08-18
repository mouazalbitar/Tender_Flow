const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        otp_hash: {
            type: String,
            required: true,
        },
        purpose: {
            type: String,
            enum: ["PHONE_VERIFICATION", "PASSWORD_RESET"],
            required: true,
        },
        expires_at: {
            type: Date,
            required: true,
        },
        attempts: {
            type: Number,
            default: 0,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = { OTP };
