const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
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
            trim: true,
        },
        name_ar: {
            type: String,
            trim: true,
        },
        module: {
            type: String,
            required: true,
            enum: ["TENDER", "BID", "USER", "REPORT", "SYSTEM", "ORG"],
        },
        description: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

const Permission = mongoose.model("Permission", permissionSchema);
module.exports = { Permission };
