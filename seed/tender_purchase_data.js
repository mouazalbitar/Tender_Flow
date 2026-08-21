const mongoose = require("mongoose");

const tender_purchases = [
    // ==========================================
    // TENDER 003
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000001"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),

        amount: 100,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-14T10:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000002"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),

        amount: 100,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-15T09:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000003"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),

        amount: 100,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-16T11:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000004"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),

        amount: 100,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-17T12:00:00.000Z"),
    },

    // ==========================================
    // TENDER 007
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000005"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),

        amount: 250,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-19T09:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000006"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),

        amount: 250,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-20T10:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000007"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),

        amount: 250,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-20T11:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000008"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),

        amount: 250,
        currency: "USD",

        payment_status: "PAID",

        paid_at: new Date("2026-08-21T09:00:00.000Z"),
    },

    // ==========================================
    // TENDER 010
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000009"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),

        amount: 150000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-07T09:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000010"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),

        amount: 150000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-08T10:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000011"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),

        amount: 150000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-09T11:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000012"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),

        amount: 150000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-10T12:00:00.000Z"),
    },

    // ==========================================
    // TENDER 012
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000013"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),

        amount: 200000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-17T09:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000014"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),

        amount: 200000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-18T10:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000015"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),

        amount: 200000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-19T11:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68c000000000000000000016"),

        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),

        amount: 200000,
        currency: "SYP",

        payment_status: "PAID",

        paid_at: new Date("2026-08-20T12:00:00.000Z"),
    },
];

module.exports = { tender_purchases };
