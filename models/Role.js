const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            uppercase: true,
        },
        name_ar: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        permissions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Permission",
            },
        ],
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

const Role = mongoose.model("Role", roleSchema);
module.exports = { Role };
