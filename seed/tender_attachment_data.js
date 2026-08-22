const mongoose = require("mongoose");

const tender_attachments = [
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000001"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000001"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications and conditions for the project.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000002"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000001"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial requirements and payment terms for the tender.",
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
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000021"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000009"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for IT infrastructure installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000022"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000009"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial terms and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000023"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for infrastructure works.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000024"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000010"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description:
            "Detailed quantities for roads, drainage and utility networks.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000025"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000011"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for supply and installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000026"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000011"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and rules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000027"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for hospital construction and infrastructure works.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000028"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial and payment requirements.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000029"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000012"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed quantities for hospital expansion works.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000030"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000013"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for commercial building construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000031"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000013"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms and conditions.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000032"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000014"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical specifications for water network supply.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000033"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000014"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Bill of quantities for piping and pumps.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000034"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000015"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical requirements for bridge maintenance.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000035"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000015"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial terms and bank guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000036"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000016"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for IT system upgrading.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000037"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000016"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Hardware and software license quantities.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000038"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000017"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical conditions for school renovation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000039"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000017"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and requirements.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000040"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000018"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical specs for waste management equipment.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000041"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000018"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms and payment schedules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000042"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000019"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for power plant overhaul.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000043"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000019"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for turbines and spare parts.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000044"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000020"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for public park landscaping.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000045"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000020"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative rules and execution schedules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000046"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000021"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for port warehouse extension.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000047"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000021"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial terms for warehouse construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000048"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000022"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical conditions for street lighting installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000049"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000022"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for LED poles and wiring.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000050"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000023"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for university lab equipment.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000051"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000023"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and delivery rules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000052"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000024"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for stadium upgrade.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000053"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000024"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000054"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000024"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Bill of quantities for stadium seating and turf.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000055"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000025"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical specs for solar pump installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000056"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000025"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for solar panels and pumps.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000057"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000026"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specifications for highway paving.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000058"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000026"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and contractual terms.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000059"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000027"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical requirements for medical equipment supply.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000060"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000027"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial requirements and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000061"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000028"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical scope for city drainage maintenance.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000062"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000028"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for excavation and piping works.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000063"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000029"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for smart meter deployment.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000064"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000029"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Requirements",
        description: "General administrative specifications.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000065"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000030"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for fire safety installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000066"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000030"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial terms and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000067"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000031"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical specs for optical fiber cable deployment.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000068"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000031"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for fiber cables and accessories.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000069"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000032"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical conditions for bridge construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000070"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000032"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and project milestones.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000071"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000033"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for water desalination unit.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000072"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000033"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Payment terms and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000073"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000034"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description:
            "Technical specifications for airport terminal maintenance.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000074"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000034"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Bill of quantities for terminal maintenance items.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000075"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000035"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical conditions for public library construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000076"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000035"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and requirements.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000077"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000036"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for sub-station transformer supply.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000078"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000036"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms and conditions.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000079"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000036"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed quantities for transformers and cabling.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000080"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000037"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description:
            "Technical requirements for agricultural canal rehabilitation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000081"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000037"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for canal concrete lining.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000082"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000038"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for security camera installation.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000083"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000038"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and service rules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000084"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000039"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for wastewater treatment unit.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000085"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000039"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial terms and bank guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000003/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000086"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000040"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for datacenter expansion.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000087"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000040"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for server racks and cooling units.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000004/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000088"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000041"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for bus terminal construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000089"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000041"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Requirements",
        description: "General administrative terms.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000005/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000090"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000042"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for solar street lights supply.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000091"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000042"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial specifications and payment terms.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000006/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000092"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000043"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description:
            "Technical specifications for pharmaceutical warehouse construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000093"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000043"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for HVAC and storage racks.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000007/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000094"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000044"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical requirements for water reservoir maintenance.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000095"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000044"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Contractual rules and execution terms.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000008/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000096"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000045"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for traffic signal modernization.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000097"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000045"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Conditions",
        description: "Financial terms and bank guarantee rules.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000009/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000098"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000046"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for municipal fleet maintenance.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000099"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000046"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Spare parts and labor hour schedule.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000010/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000100"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000047"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Specifications",
        description: "Technical requirements for railway line repair.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000101"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000047"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Administrative conditions and requirements.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000011/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000102"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000048"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description: "Technical specs for university campus expansion.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000103"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000048"),
        type: "FINANCIAL_CONDITIONS",
        name: "Financial Terms",
        description: "Financial requirements and guarantees.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/financial_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000104"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000048"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Detailed quantities for campus building construction.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000012/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000105"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000049"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Requirements",
        description: "Technical specs for dam maintenance works.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000106"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000049"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Quantities for dam structural repair.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000001/quantity_schedule.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000107"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000050"),
        type: "TECHNICAL_CONDITIONS",
        name: "Technical Conditions Book",
        description:
            "Technical specifications for smart city central control unit.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/technical_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000108"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000050"),
        type: "ADMINISTRATIVE_CONDITIONS",
        name: "Administrative Conditions",
        description: "Contractual and administrative specifications.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/administrative_conditions.pdf",
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000109"),
        tender_id: new mongoose.Types.ObjectId("67b000000000000000000050"),
        type: "QUANTITY_SCHEDULE",
        name: "Bill of Quantities",
        description: "Bill of quantities for smart city hardware and software.",
        file_path:
            "uploads/tenders/attachments/67b000000000000000000002/quantity_schedule.pdf",
    },
];

module.exports = { tender_attachments };
