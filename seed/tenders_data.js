const mongoose = require("mongoose");

const tenders = [
    // ==========================================
    // PUBLISHER: Future Infrastructure Company
    // ==========================================
    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000001"),
        title: "Construction of Homs Water Treatment Plant",
        description:
            "Construction and implementation of a modern water treatment plant in Homs.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000005",
        ),
        status: "OPEN",
        type: "PUBLIC",
        category: "ENGINEERING",
        submission_start: new Date("2026-08-01T08:00:00.000Z"),
        submission_deadline: new Date("2026-08-30T23:59:59.000Z"),
        estimated_value: 500000000,
        currency: "SYP",
        execution_location: "Homs",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000002"),
        title: "Homs Public Road Rehabilitation Project",
        description:
            "Rehabilitation and maintenance of major public roads and intersections in Homs.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000005",
        ),
        status: "PUBLISHED",
        type: "PUBLIC",
        category: "MAINTENANCE",
        published_at: new Date("2026-08-10T10:00:00.000Z"),
        submission_start: new Date("2026-09-15T08:00:00.000Z"),
        submission_deadline: new Date("2026-10-15T23:59:59.000Z"),
        estimated_value: 750000000,
        currency: "SYP",
        execution_location: "Homs",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000003"),
        title: "Supply of Construction Equipment",
        description:
            "Supply and delivery of heavy construction equipment for infrastructure projects.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000005",
        ),
        status: "OPEN",
        type: "LIMITED",
        category: "SUPPLY",
        published_at: new Date("2026-08-05T09:00:00.000Z"),
        submission_start: new Date("2026-08-10T08:00:00.000Z"),
        submission_deadline: new Date("2026-09-10T23:59:59.000Z"),
        estimated_value: 250000,
        currency: "USD",
        execution_location: "Homs",
    },

    // ==========================================
    // PUBLISHER: United Development Corporation
    // ==========================================
    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000004"),
        title: "Latakia Coastal Development Project",
        description:
            "Development and infrastructure works for a new coastal commercial area in Latakia.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000006",
        ),
        status: "OPEN",
        type: "PUBLIC",
        category: "IT",
        published_at: new Date("2026-08-01T08:00:00.000Z"),
        submission_start: new Date("2026-08-05T08:00:00.000Z"),
        submission_deadline: new Date("2026-09-05T23:59:59.000Z"),
        estimated_value: 1200000,
        currency: "USD",
        execution_location: "Latakia",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000005"),
        title: "Latakia Administrative Building",
        description:
            "Construction of a new administrative building including electrical and mechanical works.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000006",
        ),
        status: "CLOSED",
        type: "PUBLIC",
        category: "CONSTRUCTION",
        published_at: new Date("2026-06-01T08:00:00.000Z"),
        submission_start: new Date("2026-06-05T08:00:00.000Z"),
        submission_deadline: new Date("2026-07-05T23:59:59.000Z"),
        estimated_value: 900000000,
        currency: "SYP",
        execution_location: "Latakia",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000006"),
        title: "Specialized Engineering Consultancy",
        description:
            "Provision of specialized engineering consultancy services for a major development project.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000006",
        ),
        status: "AWARDED",
        type: "LIMITED",
        category: "SERVICES",
        published_at: new Date("2026-04-01T08:00:00.000Z"),
        submission_start: new Date("2026-04-05T08:00:00.000Z"),
        submission_deadline: new Date("2026-05-05T23:59:59.000Z"),
        estimated_value: 150000,
        currency: "USD",
        execution_location: "Latakia",
    },

    // ==========================================
    // PUBLISHER: National Energy Solutions
    // ==========================================
    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000007"),
        title: "Solar Power Plant Construction",
        description:
            "Engineering, procurement and construction of a solar power generation facility.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000008",
        ),
        status: "PUBLISHED",
        type: "PUBLIC",
        category: "ENERGY",
        published_at: new Date("2026-08-12T08:00:00.000Z"),
        submission_start: new Date("2026-08-20T08:00:00.000Z"),
        submission_deadline: new Date("2026-10-01T23:59:59.000Z"),
        estimated_value: 2500000,
        currency: "USD",
        execution_location: "Damascus",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000008"),
        title: "Electrical Grid Maintenance Services",
        description:
            "Maintenance and technical support services for electrical distribution networks.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000008",
        ),
        status: "REPUBLISHED",
        type: "LIMITED",
        category: "SERVICES",
        published_at: new Date("2026-08-08T08:00:00.000Z"),
        submission_start: new Date("2026-08-12T08:00:00.000Z"),
        submission_deadline: new Date("2026-09-12T23:59:59.000Z"),
        estimated_value: 400000000,
        currency: "SYP",
        execution_location: "Damascus",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000009"),
        title: "Emergency Transformer Replacement",
        description:
            "Replacement and installation of electrical transformers for emergency infrastructure requirements.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000008",
        ),
        status: "CANCELLED",
        type: "DIRECT",
        category: "MEDICAL",
        estimated_value: 85000,
        currency: "EUR",
        submission_start: new Date("2026-05-01T08:00:00.000Z"),
        submission_deadline: new Date("2026-05-20T23:59:59.000Z"),
        execution_location: "Damascus",
    },

    // ==========================================
    // PUBLISHER: Eastern Infrastructure Authority
    // ==========================================
    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        title: "Homs Industrial Zone Infrastructure",
        description:
            "Construction of roads, drainage systems and utility networks for the Homs industrial zone.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000012",
        ),
        status: "OPEN",
        type: "PUBLIC",
        category: "IT",
        published_at: new Date("2026-08-03T08:00:00.000Z"),
        submission_start: new Date("2026-08-07T08:00:00.000Z"),
        submission_deadline: new Date("2026-09-20T23:59:59.000Z"),
        estimated_value: 1800000000,
        currency: "SYP",
        execution_location: "Homs",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000011"),
        title: "Municipal Waste Management Services",
        description:
            "Operation and management of municipal waste collection and disposal services.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000012",
        ),
        status: "DRAFT",
        type: "LIMITED",
        category: "OTHER",
        submission_start: new Date("2026-10-01T08:00:00.000Z"),
        submission_deadline: new Date("2026-11-01T23:59:59.000Z"),
        estimated_value: 300000,
        currency: "EUR",
        execution_location: "Homs",
    },

    // ==========================================
    // PUBLISHER: National Construction Directorate
    // ==========================================
    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        title: "Damascus Public Hospital Expansion",
        description:
            "Expansion and modernization of a public hospital including construction and infrastructure works.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000013",
        ),
        status: "PUBLISHED",
        type: "PUBLIC",
        category: "MEDICAL",
        published_at: new Date("2026-08-11T08:00:00.000Z"),
        submission_start: new Date("2026-08-18T08:00:00.000Z"),
        submission_deadline: new Date("2026-09-25T23:59:59.000Z"),
        estimated_value: 3000000000,
        currency: "SYP",
        execution_location: "Damascus",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000013"),
        title: "Government Office Renovation",
        description:
            "Renovation and modernization of government administrative offices.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000013",
        ),
        status: "CLOSED",
        type: "LIMITED",
        category: "OTHER",
        published_at: new Date("2026-05-10T08:00:00.000Z"),
        submission_start: new Date("2026-05-15T08:00:00.000Z"),
        submission_deadline: new Date("2026-06-15T23:59:59.000Z"),
        estimated_value: 650000000,
        currency: "SYP",
        execution_location: "Damascus",
    },

    {
        _id: new mongoose.Types.ObjectId("67b000000000000000000014"),
        title: "Specialized Security Infrastructure",
        description:
            "Implementation of specialized infrastructure and security systems for a government facility.",
        publisher_org_id: new mongoose.Types.ObjectId(
            "66b000000000000000000013",
        ),
        status: "DRAFT",
        type: "DIRECT",
        category: "IT",
        submission_start: new Date("2026-10-15T08:00:00.000Z"),
        submission_deadline: new Date("2026-11-15T23:59:59.000Z"),
        execution_location: "Damascus",
    },
];

module.exports = { tenders };
