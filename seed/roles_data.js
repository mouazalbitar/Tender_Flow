const mongoose = require("mongoose");

const roles = [
    // ==================================================
    // SUPER ADMIN
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000001"),

        code: "SUPER_ADMIN",

        name: "SUPER_ADMIN",

        name_ar: "السوبر أدمن",

        description: "Full access to all system resources and operations.",

        permission_codes: [
            // TENDER
            "TENDER_CREATE",
            "TENDER_READ",
            "TENDER_UPDATE",
            "TENDER_DELETE",
            "TENDER_PUBLISH",
            "TENDER_CANCEL",
            "TENDER_CLOSE",
            "TENDER_REPUBLISH",
            "TENDER_VIEW_ALL",
            "TENDER_AWARD",

            // TENDER ATTACHMENTS
            "TENDER_ATTACHMENT_READ",
            "TENDER_ATTACHMENT_CREATE",
            "TENDER_ATTACHMENT_UPDATE",
            "TENDER_ATTACHMENT_DELETE",

            // BID
            "BID_CREATE",
            "BID_READ",
            "BID_UPDATE",
            "BID_WITHDRAW",
            "BID_ACCEPT",
            "BID_REJECT",
            "BID_EVALUATE",

            // USER
            "USER_CREATE",
            "USER_READ",
            "USER_UPDATE",
            "USER_DELETE",
            "USER_CHANGE_STATUS",
            "USER_ASSIGN_ROLE",

            // ORGANIZATION
            "ORG_CREATE",
            "ORG_READ",
            "ORG_UPDATE",
            "ORG_DELETE",
            "ORG_CHANGE_STATUS",

            // REPORT
            "REPORT_READ",
            "REPORT_EXPORT",

            // SYSTEM
            "SYSTEM_READ",
            "SYSTEM_SETTINGS",
            "SYSTEM_MANAGE_ROLES",
            "SYSTEM_MANAGE_PERMISSIONS",
        ],

        is_active: true,
    },

    // ==================================================
    // PUBLISHER MANAGER
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000002"),

        code: "PUBLISHER_MANAGER",

        name: "PUBLISHER_MANAGER",

        name_ar: "مدير المؤسسة الناشرة",

        description:
            "Manages the publisher organization, its users, tenders and tender-related operations.",

        permission_codes: [
            // TENDER
            "TENDER_CREATE",
            "TENDER_READ",
            "TENDER_UPDATE",
            "TENDER_PUBLISH",
            "TENDER_CANCEL",
            "TENDER_CLOSE",
            "TENDER_REPUBLISH",
            "TENDER_AWARD",

            // TENDER ATTACHMENTS
            "TENDER_ATTACHMENT_READ",
            "TENDER_ATTACHMENT_CREATE",
            "TENDER_ATTACHMENT_UPDATE",
            "TENDER_ATTACHMENT_DELETE",

            // BID
            "BID_READ",

            // USER
            "USER_CREATE",
            "USER_READ",
            "USER_UPDATE",
            "USER_CHANGE_STATUS",
            "USER_ASSIGN_ROLE",

            // ORGANIZATION
            "ORG_READ",
            "ORG_UPDATE",

            // REPORT
            "REPORT_READ",
            "REPORT_EXPORT",
        ],

        is_active: true,
    },

    // ==================================================
    // EXECUTOR MANAGER
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000003"),

        code: "EXECUTOR_MANAGER",

        name: "EXECUTOR_MANAGER",

        name_ar: "مدير المؤسسة المنفذة",

        description:
            "Manages the executor organization and its users and participates in bid submission operations.",

        permission_codes: [
            // TENDER
            "TENDER_READ",
            "TENDER_ATTACHMENT_READ",

            // BID
            "BID_CREATE",
            "BID_READ",
            "BID_UPDATE",
            "BID_WITHDRAW",

            // USER
            "USER_CREATE",
            "USER_READ",
            "USER_UPDATE",
            "USER_CHANGE_STATUS",
            "USER_ASSIGN_ROLE",

            // ORGANIZATION
            "ORG_READ",
            "ORG_UPDATE",

            // REPORT
            "REPORT_READ",
        ],

        is_active: true,
    },

    // ==================================================
    // TENDER PUBLISHER
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000004"),

        code: "TENDER_PUBLISHER",

        name: "TENDER_PUBLISHER",

        name_ar: "ناشر المناقصات",

        description:
            "Responsible for creating, preparing, publishing and managing tenders for the publisher organization.",

        permission_codes: [
            // TENDER
            "TENDER_CREATE",
            "TENDER_READ",
            "TENDER_UPDATE",
            "TENDER_PUBLISH",
            "TENDER_CANCEL",
            "TENDER_CLOSE",
            "TENDER_REPUBLISH",

            // TENDER ATTACHMENTS
            "TENDER_ATTACHMENT_READ",
            "TENDER_ATTACHMENT_CREATE",
            "TENDER_ATTACHMENT_UPDATE",
            "TENDER_ATTACHMENT_DELETE",

            // ORGANIZATION
            "ORG_READ",
        ],

        is_active: true,
    },

    // ==================================================
    // BID COMMITTEE MEMBER
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000005"),

        code: "BID_COMMITTEE_MEMBER",

        name: "BID_COMMITTEE_MEMBER",

        name_ar: "عضو لجنة فض العروض",

        description:
            "Evaluates submitted bids and participates in the bid opening and evaluation process.",

        permission_codes: [
            // TENDER
            "TENDER_READ",
            "TENDER_ATTACHMENT_READ",

            // BID
            "BID_READ",
            "BID_EVALUATE",
            "BID_ACCEPT",
            "BID_REJECT",

            // ORGANIZATION
            "ORG_READ",
        ],

        is_active: true,
    },

    // ==================================================
    // SYSTEM EMPLOYEE
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("69b000000000000000000006"),

        code: "SYSTEM_EMPLOYEE",

        name: "SYSTEM_EMPLOYEE",

        name_ar: "موظف النظام",

        description:
            "System employee with permissions assigned by the system administrator.",

        permission_codes: [
            "TENDER_READ",
            "BID_READ",
            "USER_READ",
            "ORG_READ",
            "REPORT_READ",
            "TENDER_ATTACHMENT_READ",
        ],

        is_active: true,
    },
];

module.exports = { roles };
