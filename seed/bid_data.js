const mongoose = require("mongoose");

const bids = [
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000031"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 185000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_031.pdf",
        notes: "Complete construction and implementation proposal with full material supply.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-04T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000032"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 179500000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_032.pdf",
        notes: "Competitive offer including construction materials and project supervision.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-05T11:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000033"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 2380000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_033.pdf",
        notes: "Full EPC proposal for solar power plant construction and commissioning.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000034"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 2450000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_034.pdf",
        notes: "Engineering, procurement and construction proposal with long-term maintenance.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-21T11:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000035"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 2290000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_035.pdf",
        notes: "High-efficiency solar technology with complete installation and commissioning.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-22T08:40:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000036"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000008"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 920000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_036.pdf",
        notes: "Complete technical and financial proposal with equipment supply.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-05T12:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000037"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000008"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 895000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_037.pdf",
        notes: "Competitive proposal with accelerated delivery schedule.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-06T10:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000038"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 1720000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_038.pdf",
        notes: "Full infrastructure construction proposal covering roads and utilities.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-08T10:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000039"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 1780000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_039.pdf",
        notes: "Proposal includes roads, drainage and utility networks.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-09T13:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000040"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 1650000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_040.pdf",
        notes: "Competitive financial proposal with an accelerated implementation schedule.",
        status: "ACCEPTED",
        submitted_at: new Date("2026-08-10T09:20:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000041"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 2870000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_041.pdf",
        notes: "Hospital expansion proposal covering construction and infrastructure.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-18T09:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000042"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 2940000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_042.pdf",
        notes: "Modern medical infrastructure and construction methodology.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-19T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000043"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 2790000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_043.pdf",
        notes: "Complete construction and project management proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T14:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000044"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000013"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 680000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_044.pdf",
        notes: "Industrial infrastructure development proposal with full implementation plan.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-08T11:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000045"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000015"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 760000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_045.pdf",
        notes: "Complete supply and installation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-08T12:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000046"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000015"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 785000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_046.pdf",
        notes: "Competitive technical proposal with extended support services.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-09T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000047"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000015"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 742000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_047.pdf",
        notes: "Cost-effective proposal with immediate resource availability.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-09T14:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000048"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000017"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 920000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_048.pdf",
        notes: "Complete infrastructure implementation and project management proposal.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-10T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000049"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000018"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 580000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_049.pdf",
        notes: "Complete engineering and implementation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-10T12:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000050"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000018"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 565000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_050.pdf",
        notes: "Competitive offer with optimized implementation schedule.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-11T10:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000051"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000020"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 410000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_051.pdf",
        notes: "Full supply and implementation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-11T15:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000052"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000020"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 425000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_052.pdf",
        notes: "Technical proposal includes equipment supply, installation and support.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-12T08:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000053"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000022"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 125000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_053.pdf",
        notes: "Complete construction and infrastructure proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-12T11:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000054"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000022"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 119000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_054.pdf",
        notes: "Competitive financial offer with accelerated execution schedule.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-12T16:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000055"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000023"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 485000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_055.pdf",
        notes: "Complete technical and financial proposal with delivery plan.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-13T10:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000056"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000025"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 325000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_056.pdf",
        notes: "Complete implementation proposal with equipment and installation.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-13T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000057"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000025"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 338000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_057.pdf",
        notes: "Engineering proposal with extended technical support.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-14T14:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000058"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000025"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 312000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_058.pdf",
        notes: "Competitive offer with optimized delivery schedule.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-14T08:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000059"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000027"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 520000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_059.pdf",
        notes: "Complete technical proposal including supply and installation.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-14T11:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000060"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000028"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 335000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_060.pdf",
        notes: "Infrastructure construction proposal with complete resource allocation.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-14T15:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000061"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000028"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 320000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_061.pdf",
        notes: "Competitive proposal with accelerated execution.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-15T09:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000062"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000030"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 620000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_062.pdf",
        notes: "Complete supply and implementation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-15T12:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000063"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000030"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 645000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_063.pdf",
        notes: "Technical proposal includes equipment, installation and maintenance.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-16T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000064"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000032"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 75000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_064.pdf",
        notes: "Complete infrastructure and construction proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-16T14:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000065"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000032"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 71500000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_065.pdf",
        notes: "Competitive proposal with optimized implementation plan.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-17T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000066"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000033"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 575000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_066.pdf",
        notes: "Full technical proposal with delivery and implementation schedule.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-17T12:00:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000067"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000035"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 285000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_067.pdf",
        notes: "Complete construction proposal with material supply and project supervision.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-18T08:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000068"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000035"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 292000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_068.pdf",
        notes: "Engineering and construction proposal with complete resource allocation.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-18T13:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000069"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000035"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 278000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_069.pdf",
        notes: "Competitive financial proposal with accelerated schedule.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-18T16:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000070"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000037"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 410000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_070.pdf",
        notes: "Complete engineering proposal with equipment supply.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-19T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000071"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000038"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 460000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_071.pdf",
        notes: "Complete technical and financial proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-19T10:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000072"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000038"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 445000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_072.pdf",
        notes: "Competitive offer with full implementation and support.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-19T14:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000073"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000040"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 195000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_073.pdf",
        notes: "Complete infrastructure construction and implementation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T08:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000074"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000040"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 202000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_074.pdf",
        notes: "Engineering proposal including roads, utilities and drainage.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-20T11:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000075"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000042"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 455000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_075.pdf",
        notes: "Complete technical and financial proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-20T15:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000076"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000042"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 438000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_076.pdf",
        notes: "Competitive proposal with immediate implementation capability.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-21T09:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000077"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000043"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 1250000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_077.pdf",
        notes: "Full technical proposal with supply, installation and maintenance.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-21T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000078"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000045"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 110000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_078.pdf",
        notes: "Complete infrastructure and construction proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-21T12:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000079"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000045"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 115000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_079.pdf",
        notes: "Competitive proposal with full project supervision.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-21T14:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000080"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000045"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 107000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_080.pdf",
        notes: "Cost-effective proposal with accelerated implementation.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-21T16:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000081"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000047"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 385000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_081.pdf",
        notes: "Complete technical and financial proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-22T08:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000082"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000048"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 290000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_082.pdf",
        notes: "Complete engineering and implementation proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-22T09:45:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000083"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000048"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000007",
        ),
        offered_value: 278000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_083.pdf",
        notes: "Competitive offer with optimized execution schedule.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-22T10:30:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000084"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000050"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000003",
        ),
        offered_value: 460000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_084.pdf",
        notes: "Complete construction and infrastructure proposal.",
        status: "SUBMITTED",
        submitted_at: new Date("2026-08-22T11:15:00.000Z"),
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000085"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000050"),
        executor_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000004",
        ),
        offered_value: 475000000,
        currency: "SYP",
        technical_proposal_file:
            "/uploads/executor/bids/technical_proposal_085.pdf",
        notes: "Engineering and implementation proposal with complete resource allocation.",
        status: "UNDER_REVIEW",
        submitted_at: new Date("2026-08-22T11:45:00.000Z"),
    },
];

module.exports = { bids };
