const mongoose = require("mongoose");

const orgs = [
    {
        _id: new mongoose.Types.ObjectId("66b000000000000000000001"),
        org_name: "System",
        _address: "local",
        _type: "SYSTEM",
        phone_number: "099999999",
        email: "admin@admin.com",
        commercial_register_num: "test1",
        commercial_register_date: "2024-01-01",
        license_num: "test1",
        license_date: "2024-01-01",
    },
    {
        _id: new mongoose.Types.ObjectId("66b000000000000000000002"),
        org_name: "company1",
        _address: "damascus",
        _type: "PUBLISHER",
        phone_number: "099999999",
        email: "admin1@admin.com",
        commercial_register_num: "test2",
        commercial_register_date: "2024-01-01",
        license_num: "test2",
        license_date: "2024-01-01",
    },
];

module.exports = { orgs };
