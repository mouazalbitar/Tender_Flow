const mongoose = require("mongoose");

const tender_attachments = [
    // ============================================================
    // TENDER 001 - Construction of Homs Water Treatment Plant
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000001"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000001"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications and conditions for the construction of the water treatment plant.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000002"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000001"),

        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description:
            "Financial requirements and payment conditions for the tender.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/financial_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000003"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000001"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed quantities and items required for the project.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 002 - Homs Public Road Rehabilitation Project
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000004"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000002"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for road rehabilitation and maintenance.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000005"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000002"),

        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative and contractual conditions of the tender.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/administrative_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000006"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000002"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description:
            "Quantities and work items required for road rehabilitation.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 003 - Supply of Construction Equipment
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000007"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description:
            "Technical specifications and minimum requirements for supplied equipment.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000008"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000003"),

        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms, payment conditions and guarantees.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/financial_conditions.pdf",
    },

    // ============================================================
    // TENDER 004 - Latakia Coastal Development Project
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000009"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical requirements for the coastal development project.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000010"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000004"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed project quantities and required works.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 005 - Latakia Administrative Building
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000011"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for construction and MEP works.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000012"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),

        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial and payment conditions.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/financial_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000013"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),

        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative and contractual requirements.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/administrative_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000014"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000005"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description:
            "Detailed quantities for the administrative building project.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 006 - Specialized Engineering Consultancy
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000015"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000006"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description:
            "Technical requirements and scope of consultancy services.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000016"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000006"),

        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial requirements and payment terms.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/financial_conditions.pdf",
    },

    // ============================================================
    // TENDER 007 - Solar Power Plant Construction
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000017"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for engineering, procurement and construction.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000018"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000007"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description:
            "Detailed quantities and equipment required for the solar power plant.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 008 - Electrical Grid Maintenance Services
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000019"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000008"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description:
            "Technical requirements for electrical grid maintenance services.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000020"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000008"),

        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative requirements and service conditions.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/administrative_conditions.pdf",
    },

    // ============================================================
    // TENDER 010 - Homs Industrial Zone Infrastructure
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000021"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for infrastructure works.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000022"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description:
            "Detailed quantities for roads, drainage and utility networks.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/quantity_schedule.pdf",
    },

    // ============================================================
    // TENDER 012 - Damascus Public Hospital Expansion
    // ============================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000023"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for hospital construction and infrastructure works.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/technical_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000024"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial and payment requirements.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/financial_conditions.pdf",
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000025"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),

        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed quantities for hospital expansion works.",

        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/quantity_schedule.pdf",
    },
];

module.exports = { tender_attachments };
