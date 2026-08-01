const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        org_id: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
        role_id: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
        status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "REJECTED", "SUSPENDED", "BANNED"],
            default: "PENDING",
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
        },
        phone: {
            type: String,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        device_token: String,

        // بيانات خاصة بموظفي النظام (Null إذا لم يكن موظف نظام)
        system_employee_info: {
            employee_code: String,
            department: {
                type: String,
                enum: ["APPROVAL", "AUDIT", "SUPPORT", "ADMIN"],
            },
            hired_at: {
                Date,
            },
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
