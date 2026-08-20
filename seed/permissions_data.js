const mongoose = require("mongoose");

const permissions = [

    // ==================================================
    // TENDER
    // ==================================================
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000001"),
        code: "TENDER_CREATE",
        name: "Create Tender",
        name_ar: "إنشاء مناقصة",
        module: "TENDER",
        description: "Allows the user to create a new tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000002"),
        code: "TENDER_READ",
        name: "View Tender",
        name_ar: "عرض المناقصات",
        module: "TENDER",
        description: "Allows the user to view tenders.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000003"),
        code: "TENDER_UPDATE",
        name: "Update Tender",
        name_ar: "تعديل المناقصة",
        module: "TENDER",
        description: "Allows the user to update tender information.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000004"),
        code: "TENDER_DELETE",
        name: "Delete Tender",
        name_ar: "حذف المناقصة",
        module: "TENDER",
        description: "Allows the user to delete a tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000005"),
        code: "TENDER_PUBLISH",
        name: "Publish Tender",
        name_ar: "نشر المناقصة",
        module: "TENDER",
        description: "Allows the user to publish a tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000006"),
        code: "TENDER_CANCEL",
        name: "Cancel Tender",
        name_ar: "إلغاء المناقصة",
        module: "TENDER",
        description: "Allows the user to cancel a tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000007"),
        code: "TENDER_CLOSE",
        name: "Close Tender",
        name_ar: "إغلاق المناقصة",
        module: "TENDER",
        description: "Allows the user to close a tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000008"),
        code: "TENDER_REPUBLISH",
        name: "Republish Tender",
        name_ar: "إعادة نشر المناقصة",
        module: "TENDER",
        description: "Allows the user to republish a tender.",
        is_active: true,
    },
    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000055"),
        code: "TENDER_VIEW_ALL",
        name: "View All Tenders",
        name_ar: "عرض جميع المناقصات",
        module: "TENDER",
        description: "View All Tenders for admin.",
        is_active: true,
    },

    // ==================================================
    // BID
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000011"),
        code: "BID_CREATE",
        name: "Submit Bid",
        name_ar: "تقديم عرض",
        module: "BID",
        description: "Allows the user to submit a bid.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000012"),
        code: "BID_READ",
        name: "View Bids",
        name_ar: "عرض العروض",
        module: "BID",
        description: "Allows the user to view bids.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000013"),
        code: "BID_UPDATE",
        name: "Update Bid",
        name_ar: "تعديل العرض",
        module: "BID",
        description: "Allows the user to update a submitted bid.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000014"),
        code: "BID_WITHDRAW",
        name: "Withdraw Bid",
        name_ar: "سحب العرض",
        module: "BID",
        description: "Allows the user to withdraw a submitted bid.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000015"),
        code: "BID_ACCEPT",
        name: "Accept Bid",
        name_ar: "قبول العرض",
        module: "BID",
        description: "Allows the user to accept a bid.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000016"),
        code: "BID_REJECT",
        name: "Reject Bid",
        name_ar: "رفض العرض",
        module: "BID",
        description: "Allows the user to reject a bid.",
        is_active: true,
    },

    // ==================================================
    // USER
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000021"),
        code: "USER_CREATE",
        name: "Create User",
        name_ar: "إنشاء مستخدم",
        module: "USER",
        description: "Allows the user to create a new user.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000022"),
        code: "USER_READ",
        name: "View Users",
        name_ar: "عرض المستخدمين",
        module: "USER",
        description: "Allows the user to view users.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000023"),
        code: "USER_UPDATE",
        name: "Update User",
        name_ar: "تعديل المستخدم",
        module: "USER",
        description: "Allows the user to update user information.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000024"),
        code: "USER_DELETE",
        name: "Delete User",
        name_ar: "حذف المستخدم",
        module: "USER",
        description: "Allows the user to delete a user.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000025"),
        code: "USER_CHANGE_STATUS",
        name: "Change User Status",
        name_ar: "تغيير حالة المستخدم",
        module: "USER",
        description: "Allows the user to change a user's status.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000026"),
        code: "USER_ASSIGN_ROLE",
        name: "Assign Role to User",
        name_ar: "إسناد دور للمستخدم",
        module: "USER",
        description: "Allows the user to assign a role to another user.",
        is_active: true,
    },

    // ==================================================
    // ORGANIZATION
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000031"),
        code: "ORG_CREATE",
        name: "Create Organization",
        name_ar: "إنشاء مؤسسة",
        module: "ORG",
        description: "Allows the user to create an organization.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000032"),
        code: "ORG_READ",
        name: "View Organizations",
        name_ar: "عرض المؤسسات",
        module: "ORG",
        description: "Allows the user to view organizations.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000033"),
        code: "ORG_UPDATE",
        name: "Update Organization",
        name_ar: "تعديل المؤسسة",
        module: "ORG",
        description: "Allows the user to update organization information.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000034"),
        code: "ORG_DELETE",
        name: "Delete Organization",
        name_ar: "حذف المؤسسة",
        module: "ORG",
        description: "Allows the user to delete an organization.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000035"),
        code: "ORG_CHANGE_STATUS",
        name: "Change Organization Status",
        name_ar: "تغيير حالة المؤسسة",
        module: "ORG",
        description: "Allows the user to change an organization's status.",
        is_active: true,
    },

    // ==================================================
    // REPORT
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000041"),
        code: "REPORT_READ",
        name: "View Reports",
        name_ar: "عرض التقارير",
        module: "REPORT",
        description: "Allows the user to view system reports.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000042"),
        code: "REPORT_EXPORT",
        name: "Export Reports",
        name_ar: "تصدير التقارير",
        module: "REPORT",
        description: "Allows the user to export reports.",
        is_active: true,
    },

    // ==================================================
    // SYSTEM
    // ==================================================

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000051"),
        code: "SYSTEM_READ",
        name: "View System",
        name_ar: "عرض النظام",
        module: "SYSTEM",
        description: "Allows the user to view system information.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000052"),
        code: "SYSTEM_SETTINGS",
        name: "Manage System Settings",
        name_ar: "إدارة إعدادات النظام",
        module: "SYSTEM",
        description: "Allows the user to manage system settings.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000053"),
        code: "SYSTEM_MANAGE_ROLES",
        name: "Manage Roles",
        name_ar: "إدارة الأدوار",
        module: "SYSTEM",
        description: "Allows the user to create, update and manage roles.",
        is_active: true,
    },

    {
        _id: new mongoose.Types.ObjectId("68b000000000000000000054"),
        code: "SYSTEM_MANAGE_PERMISSIONS",
        name: "Manage Permissions",
        name_ar: "إدارة الصلاحيات",
        module: "SYSTEM",
        description: "Allows the user to create, update and manage permissions.",
        is_active: true,
    },
];

module.exports = { permissions };