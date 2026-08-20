const roles = [
    {
        code: "SUPER_ADMIN",

        name: "SUPER_ADMIN",

        name_ar: "السوبر أدمن",

        description:
            "Full access to all system resources and operations.",

        permission_codes: [
            "TENDER_CREATE",
            "TENDER_READ",
            "TENDER_UPDATE",
            "TENDER_DELETE",
            "TENDER_PUBLISH",
            "TENDER_CANCEL",
            "TENDER_CLOSE",
            "TENDER_REPUBLISH",
            "TENDER_VIEW_ALL",

            "BID_CREATE",
            "BID_READ",
            "BID_UPDATE",
            "BID_WITHDRAW",
            "BID_ACCEPT",
            "BID_REJECT",

            "USER_CREATE",
            "USER_READ",
            "USER_UPDATE",
            "USER_DELETE",
            "USER_CHANGE_STATUS",
            "USER_ASSIGN_ROLE",

            "ORG_CREATE",
            "ORG_READ",
            "ORG_UPDATE",
            "ORG_DELETE",
            "ORG_CHANGE_STATUS",

            "REPORT_READ",
            "REPORT_EXPORT",

            "SYSTEM_READ",
            "SYSTEM_SETTINGS",
            "SYSTEM_MANAGE_ROLES",
            "SYSTEM_MANAGE_PERMISSIONS",
        ],

        is_active: true,
    },

    {
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
        ],

        is_active: true,
    },

    {
        code: "PUBLISHER",

        name: "PUBLISHER",

        name_ar: "الناشر",

        description:
            "Manages tenders and reviews bids submitted to the publisher's organization.",

        permission_codes: [
            "TENDER_CREATE",
            "TENDER_READ",
            "TENDER_UPDATE",
            "TENDER_PUBLISH",
            "TENDER_CANCEL",
            "TENDER_CLOSE",
            "TENDER_REPUBLISH",

            "BID_READ",

            "ORG_READ",
        ],

        is_active: true,
    },

    {
        code: "EXECUTOR",

        name: "EXECUTOR",

        name_ar: "المنفذ",

        description:
            "Executor organization user who can view tenders and submit bids.",

        permission_codes: [
            "TENDER_READ",

            "BID_CREATE",
            "BID_READ",
            "BID_UPDATE",
            "BID_WITHDRAW",

            "ORG_READ",
        ],

        is_active: true,
    },
];

module.exports = { roles };
