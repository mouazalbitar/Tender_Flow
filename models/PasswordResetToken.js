const mongoose = require("mongoose");

const PasswordResetTokenSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        token_hash: {
            type: String,
            required: true,
            unique: true,
        },
        expires_at: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const PasswordResetToken = mongoose.model(
    "PasswordResetToken",
    PasswordResetTokenSchema,
);

module.exports = {
    PasswordResetToken,
};
