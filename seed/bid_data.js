const mongoose = require("mongoose");

const bids = [
    // ==========================================
    // TENDER 003 - Supply of Construction Equipment
    // Publisher: Future Infrastructure Company
    // Currency: USD
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000001"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 235000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_001.pdf",
        notes: "We can provide and deliver all required equipment within the specified timeframe.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-15T10:30:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000002"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 242000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_002.pdf",
        notes: "Our company proposes high-quality equipment with a comprehensive maintenance plan.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-16T09:15:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000003"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 228500,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_003.pdf",
        notes: "Competitive offer with immediate availability of the requested equipment.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-17T11:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000004"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),
        offered_value: 248000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_004.pdf",
        notes: "The offer includes transportation and installation services.",
        status: "REJECTED",
        submitted_at: new Date("2026-08-17T13:20:00.000Z"),
    },

    // ==========================================
    // TENDER 004 - Latakia Coastal Development
    // Publisher: United Development Corporation
    // Currency: USD
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000005"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 1140000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_005.pdf",
        notes: "Complete infrastructure development proposal.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-10T08:30:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000006"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 1185000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_006.pdf",
        notes: "Our proposal includes modern engineering solutions and project management.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-11T14:10:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000007"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 1095000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_007.pdf",
        notes: "Competitive pricing with a detailed implementation schedule.",
        status: "ACCEPTED",
        submitted_at: new Date("2026-08-12T10:45:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000008"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),
        offered_value: 1210000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_008.pdf",
        notes: "Detailed proposal covering all construction phases.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-13T16:20:00.000Z"),
    },

    // ==========================================
    // TENDER 007 - Solar Power Plant Construction
    // Publisher: National Energy Solutions
    // Currency: USD
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000009"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 2380000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_009.pdf",
        notes: "Complete EPC proposal for the solar power facility.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T09:30:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000010"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 2450000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_010.pdf",
        notes: "Engineering, procurement and construction proposal.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-21T11:15:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000011"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 2290000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_011.pdf",
        notes: "High-efficiency solar technology with long-term maintenance.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-22T08:40:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000012"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),
        offered_value: 2510000,
        currency: "USD",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_012.pdf",
        notes: "The offer includes equipment supply, installation and commissioning.",
        status: "REJECTED",
        submitted_at: new Date("2026-08-23T12:00:00.000Z"),
    },

    // ==========================================
    // TENDER 010 - Homs Industrial Zone Infrastructure
    // Publisher: Eastern Infrastructure Authority
    // Currency: SYP
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000014"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 1720000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_014.pdf",
        notes: "Full infrastructure construction proposal.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-08T10:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000015"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 1780000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_015.pdf",
        notes: "Proposal includes roads, drainage and utility networks.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-09T13:30:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000016"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 1650000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_016.pdf",
        notes: "Competitive financial proposal with an accelerated schedule.",
        status: "ACCEPTED",
        submitted_at: new Date("2026-08-10T09:20:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000017"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),
        offered_value: 1810000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_017.pdf",
        notes: "Complete implementation plan and resource allocation.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-11T17:00:00.000Z"),
    },

    // ==========================================
    // TENDER 012 - Damascus Public Hospital Expansion
    // Publisher: National Construction Directorate
    // Currency: SYP
    // ==========================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000019"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 2870000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_019.pdf",
        notes: "Hospital expansion proposal covering construction and infrastructure.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-18T09:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000020"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 2940000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_020.pdf",
        notes: "Modern medical infrastructure and construction methodology.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-19T10:30:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000021"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 2790000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_021.pdf",
        notes: "Complete construction and project management proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T14:00:00.000Z"),
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000022"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000009",
        ),
        offered_value: 3010000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_022.pdf",
        notes: "Detailed engineering and construction proposal.",
        status: "REJECTED",
        submitted_at: new Date("2026-08-21T16:15:00.000Z"),
    },
];

module.exports = { bids };
