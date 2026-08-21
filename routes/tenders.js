const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const {
    require_permission,
} = require("../middlewares/permission_middleware.js");
const { authorizeRoles } = require("../middlewares/role_check.js");

const { Tender } = require("../models/Tender");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { TenderAttachment } = require("../models/TenderAttachment");
const { TenderPurchase } = require("../models/TenderPurchase");
const {
    create_tender_validation,
    update_tender_validation,
} = require("../validators/tender_validation");
const {
    create_tender_attachment_validation,
    update_tender_attachment_validation,
} = require("../validators/tender_attachment_validation");
const {
    upload_tender_attachment,
} = require("../middlewares/upload_tender_attachment");
const fs = require("fs");

/**
 * @description get all tenders in the system for admin
 * @route /api/tenders/all
 * @method GET
 * @access private - ADMIN
 */
router.get(
    "/all",
    verify_token,
    require_permission("TENDER_VIEW_ALL"),
    asyncHandler(async (req, res) => {
        const tenders = await Tender.find().populate("publisher_org_id").sort({
            createdAt: -1,
        });

        res.status(200).json({
            message: "All Tenders Retrieved Successfully.",
            data: tenders,
            status: 200,
        });
    }),
);

/**
 * @description Get tenders filtered by category
 * @route GET /api/tenders/filter
 * @access private
 */
router.get(
    "/filter",
    verify_token,
    require_permission("TENDER_READ"),
    asyncHandler(async (req, res) => {
        const { category } = req.query;

        const allowed_categoreis = [
            "CONSTRUCTION",
            "ENGINEERING",
            "IT",
            "SUPPLY",
            "SERVICES",
            "MAINTENANCE",
            "CONSULTING",
            "ENERGY",
            "TRANSPORTATION",
            "MEDICAL",
            "OTHER",
        ];

        if (!category) {
            return res.status(400).json({
                message: "Tender category is required.",
                data: null,
                status: 400,
            });
        }

        if (!allowed_categoreis.includes(category)) {
            return res.status(400).json({
                message: "Invalid tender category.",
                data: null,
                status: 400,
            });
        }

        const tenders = await Tender.find({
            category: category,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "The Operation was Successful.",
            data: tenders,
            status: 200,
        });
    }),
);
/**
 * @description get tenders for users
 * @route /api/tenders
 * @method GET
 * @access private - PUBLISHER / EXECUTOR
 */
router.get(
    "/",
    verify_token,
    require_permission("TENDER_READ"),
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        let tenders;

        // ==========================================
        // PUBLISHER
        // ==========================================

        if (user.type === "PUBLISHER") {
            tenders = await Tender.find({
                publisher_org_id: user.org_id,
            })
                .populate("publisher_org_id")
                .sort({ createdAt: -1 });
        }

        // ==========================================
        // EXECUTOR
        // ==========================================
        else if (user.type === "EXECUTOR") {
            tenders = await Tender.find({
                status: {
                    $in: ["PUBLISHED", "OPEN", "REPUBLISHED"],
                },
            })
                .populate("publisher_org_id")
                .sort({ createdAt: -1 });
        }

        // ==========================================
        // OTHER USER TYPES
        // ==========================================
        else {
            return res.status(403).json({
                message: "You are not authorized to view these tenders.",
                data: null,
                status: 403,
            });
        }

        res.status(200).json({
            message: "The Operation was Successfully.",
            data: tenders,
            status: 200,
        });
    }),
);

/**
 * @description Get tenders filtered by category
 * @route GET /api/tenders/filter
 * @access private
 */
router.get(
    "/filter",
    verify_token,
    require_permission("TENDER_READ"),
    asyncHandler(async (req, res) => {
        const { category } = req.query;

        const allowed_categoreis = [
            "CONSTRUCTION",
            "ENGINEERING",
            "IT",
            "SUPPLY",
            "SERVICES",
            "MAINTENANCE",
            "CONSULTING",
            "ENERGY",
            "TRANSPORTATION",
            "MEDICAL",
            "OTHER",
        ];

        if (!category) {
            return res.status(400).json({
                message: "Tender category is required.",
                data: null,
                status: 400,
            });
        }

        if (!allowed_categoreis.includes(category)) {
            return res.status(400).json({
                message: "Invalid tender category.",
                data: null,
                status: 400,
            });
        }

        const tenders = await Tender.find({
            category: category,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "The Operation was Successful.",
            data: tenders,
            status: 200,
        });
    }),
);

/**
 * @description Get one tender by ID
 * @route GET /api/tenders/:tender_id
 * @access private - PUBLISHER / EXECUTOR
 */
router.get(
    "/:tender_id",
    verify_token,
    require_permission("TENDER_READ"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;
        const tender =
            await Tender.findById(tender_id).populate("publisher_org_id");
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "Tender Retrieved Successfully.",
            data: tender,
            status: 200,
        });
    }),
);

/**
 * @description create a new tender
 * @route /api/tenders
 * @method POST
 * @access private - PUBLISHER
 */
router.post(
    "/",
    verify_token,
    require_permission("TENDER_CREATE"),
    asyncHandler(async (req, res) => {
        const { error, value } = create_tender_validation(req.body);

        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        const organization = await Organization.findById(user.org_id);

        if (!organization) {
            return res.status(404).json({
                message: "Organization Not Found.",
                data: null,
                status: 404,
            });
        }

        if (organization._type !== "PUBLISHER") {
            return res.status(403).json({
                message: "Only publisher organizations can create tenders.",
                data: null,
                status: 403,
            });
        }

        const tender = new Tender({
            ...value,
            publisher_org_id: user.org_id,
            status: "DRAFT",
        });

        const result = await tender.save();

        res.status(201).json({
            message: "Tender Created Successfully.",
            data: result,
            status: 201,
        });
    }),
);

/**
 * @description Update tender
 * @route /api/tenders/:tender_id
 * @method PUT
 * @access private - PUBLISHER
 */
router.put(
    "/:tender_id",
    verify_token,
    require_permission("TENDER_UPDATE"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        const { error, value } = update_tender_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const tender = await Tender.findById(tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        if (tender.status !== "DRAFT") {
            return res.status(403).json({
                message:
                    "Tender can only be modified while it is in DRAFT status.",
                data: null,
                status: 403,
            });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to modify this tender.",
                data: null,
                status: 403,
            });
        }

        Object.assign(tender, value);
        const result = await tender.save();

        res.status(200).json({
            message: "Tender Updated Successfully.",
            data: result,
            status: 200,
        });
    }),
);

/**
 * @description Purchase tender attachments
 * @route /api/tenders/:tender_id/purchase
 * @method POST
 * @access private - EXECUTOR
 */
router.post(
    "/:tender_id/purchase",
    verify_token,
    require_permission("TENDER_ATTACHMENT_READ"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        // Only EXECUTOR can purchase tender attachments
        if (req.user.type !== "EXECUTOR") {
            return res.status(403).json({
                message: "Only executors can purchase tender attachments.",
                data: null,
                status: 403,
            });
        }

        // Find user
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        // Find tender
        const tender = await Tender.findById(tender_id);

        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        // Tender must be available
        if (!["PUBLISHED", "OPEN", "REPUBLISHED"].includes(tender.status)) {
            return res.status(403).json({
                message: "This tender is not available for purchase.",
                data: null,
                status: 403,
            });
        }

        // If attachments are free, no purchase is required
        if (tender.attachment_price === 0) {
            return res.status(400).json({
                message: "Tender attachments are free.",
                data: null,
                status: 400,
            });
        }

        // Check if already purchased
        const existingPurchase = await TenderPurchase.findOne({
            tender_id: tender._id,
            executor_org_id: user.org_id,
        });

        if (existingPurchase) {
            return res.status(409).json({
                message: "You have already purchased the tender attachments.",
                data: existingPurchase,
                status: 409,
            });
        }

        // Simulate successful payment
        const purchase = new TenderPurchase({
            tender_id: tender._id,
            executor_org_id: user.org_id,
            amount: tender.attachment_price,
            currency: tender.currency,
            payment_status: "PAID",
        });

        const result = await purchase.save();
        res.status(201).json({
            message: "Tender Attachments Purchased Successfully.",
            data: result,
            status: 201,
        });
    }),
);

/**
 * @description Get tender attachments
 * @route /api/tenders/:tender_id/attachments
 * @method GET
 * @access private - PUBLISHER / EXECUTOR / ADMIN
 */
router.get(
    "/:tender_id/attachments",
    verify_token,
    require_permission("TENDER_ATTACHMENT_READ"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        // Find tender
        const tender = await Tender.findById(tender_id).select(
            "_id publisher_org_id status attachment_price",
        );

        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        if (req.user.type === "PUBLISHER") {
            const user = await User.findById(req.user.id).select("org_id");

            if (!user) {
                return res.status(404).json({
                    message: "User Not Found.",
                    data: null,
                    status: 404,
                });
            }

            if (!user.org_id) {
                return res.status(403).json({
                    message: "User is not associated with an organization.",
                    data: null,
                    status: 403,
                });
            }

            if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
                return res.status(403).json({
                    message:
                        "You are not authorized to view these attachments.",
                    data: null,
                    status: 403,
                });
            }
        }

        if (req.user.type === "EXECUTOR") {
            // Check tender status
            if (!["PUBLISHED", "OPEN", "REPUBLISHED"].includes(tender.status)) {
                return res.status(403).json({
                    message: "This tender is not available.",
                    data: null,
                    status: 403,
                });
            }
            const user = await User.findById(req.user.id).select("org_id");
            if (!user) {
                return res.status(404).json({
                    message: "User Not Found.",
                    data: null,
                    status: 404,
                });
            }
            if (!user.org_id) {
                return res.status(403).json({
                    message: "User is not associated with an organization.",
                    data: null,
                    status: 403,
                });
            }

            if (tender.attachment_price > 0) {
                const purchase = await TenderPurchase.findOne({
                    tender_id: tender._id,
                    executor_org_id: user.org_id,
                    payment_status: "PAID",
                });
                if (!purchase) {
                    return res.status(403).json({
                        message:
                            "You must purchase the tender attachments first.",
                        data: null,
                        status: 403,
                    });
                }
            }
        }

        const attachments = await TenderAttachment.find({
            tender_id: tender._id,
        }).sort({ createdAt: 1 });

        return res.status(200).json({
            message: "Tender Attachments Retrieved Successfully.",
            data: attachments,
            status: 200,
        });
    }),
);

/**
 * @description Add tender attachment
 * @route /api/tenders/:tender_id/attachments
 * @method POST
 * @access private - PUBLISHER
 */
router.post(
    "/:tender_id/attachments",
    verify_token,
    require_permission("TENDER_ATTACHMENT_CREATE"),
    upload_tender_attachment.single("file"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        if (!req.file) {
            return res.status(400).json({
                message: "PDF file is required.",
                data: null,
                status: 400,
            });
        }

        // validation
        const { error, value } = create_tender_attachment_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        // find tender
        const tender = await Tender.findById(tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        // find user
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to modify this tender.",
                data: null,
                status: 403,
            });
        }

        // is file exists?
        const fixedAttachmentTypes = [
            "TECHNICAL_CONDITIONS",
            "FINANCIAL_CONDITIONS",
            "ADMINISTRATIVE_CONDITIONS",
            "QUANTITY_SCHEDULE",
        ];
        if (fixedAttachmentTypes.includes(value.type)) {
            const existingAttachment = await TenderAttachment.findOne({
                tender_id: tender._id,
                type: value.type,
            });
            if (existingAttachment) {
                return res.status(409).json({
                    message: "This attachment type already exists.",
                    data: null,
                    status: 409,
                });
            }
        }

        const attachment = new TenderAttachment({
            tender_id: tender._id,
            type: value.type,
            name: value.name,
            description: value.description,
            file_path: req.file.path,
        });

        const result = await attachment.save();
        res.status(201).json({
            message: "Tender Attachment Added Successfully.",
            data: result,
            status: 201,
        });
    }),
);

/**
 * @description Update tender attachment
 * @route /api/tenders/:tender_id/attachments/:attachment_id
 * @method PUT
 * @access private - PUBLISHER
 */
router.put(
    "/:tender_id/attachments/:attachment_id",
    verify_token,
    require_permission("TENDER_ATTACHMENT_UPDATE"),
    upload_tender_attachment.single("file"),
    asyncHandler(async (req, res) => {
        const { tender_id, attachment_id } = req.params;

        const { error, value } = update_tender_attachment_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const tender = await Tender.findById(tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        if (tender.status !== "DRAFT") {
            return res.status(403).json({
                message:
                    "Tender attachments can only be modified while the tender is in DRAFT status.",
                data: null,
                status: 403,
            });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to modify this tender.",
                data: null,
                status: 403,
            });
        }

        const attachment = await TenderAttachment.findOne({
            _id: attachment_id,
            tender_id: tender._id,
        });

        if (!attachment) {
            return res.status(404).json({
                message: "Tender Attachment Not Found.",
                data: null,
                status: 404,
            });
        }

        const fixedAttachmentTypes = [
            "TECHNICAL_CONDITIONS",
            "FINANCIAL_CONDITIONS",
            "ADMINISTRATIVE_CONDITIONS",
            "QUANTITY_SCHEDULE",
        ];
        if (
            value.type &&
            fixedAttachmentTypes.includes(value.type) &&
            value.type !== attachment.type
        ) {
            const existingAttachment = await TenderAttachment.findOne({
                tender_id: tender._id,
                type: value.type,
                _id: { $ne: attachment._id },
            });

            if (existingAttachment) {
                return res.status(409).json({
                    message: "This attachment type already exists.",
                    data: null,
                    status: 409,
                });
            }
        }

        if (value.type !== undefined) {
            attachment.type = value.type;
        }
        if (value.name !== undefined) {
            attachment.name = value.name;
        }
        if (value.description !== undefined) {
            attachment.description = value.description;
        }

        if (req.file) {
            const oldFilePath = attachment.file_path;
            attachment.file_path = req.file.path;
            if (oldFilePath && fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }

        const result = await attachment.save();
        res.status(200).json({
            message: "Tender Attachment Updated Successfully.",
            data: result,
            status: 200,
        });
    }),
);

// /**
//  * @description Delete tender attachment
//  * @route /api/tenders/:tender_id/attachments/:attachment_id
//  * @method DELETE
//  * @access private - PUBLISHER
//  */
// router.delete(
//     "/:tender_id/attachments/:attachment_id",
//     verify_token,
//     require_permission("TENDER_ATTACHMENT_UPDATE"),
//     asyncHandler(async (req, res) => {
//         const { tender_id, attachment_id } = req.params;

//         const tender = await Tender.findById(tender_id);
//         if (!tender) {
//             return res.status(404).json({
//                 message: "Tender Not Found.",
//                 data: null,
//                 status: 404,
//             });
//         }

//         if (tender.status !== "DRAFT") {
//             return res.status(403).json({
//                 message:
//                     "Tender attachments can only be deleted while the tender is in DRAFT or CANCELLED status.",
//                 data: null,
//                 status: 403,
//             });
//         }

//         const user = await User.findById(req.user.id);
//         if (!user) {
//             return res.status(404).json({
//                 message: "User Not Found.",
//                 data: null,
//                 status: 404,
//             });
//         }
//         if (!user.org_id) {
//             return res.status(403).json({
//                 message: "User is not associated with an organization.",
//                 data: null,
//                 status: 403,
//             });
//         }

//         if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
//             return res.status(403).json({
//                 message: "You are not authorized to modify this tender.",
//                 data: null,
//                 status: 403,
//             });
//         }

//         const attachment = await TenderAttachment.findOne({
//             _id: attachment_id,
//             tender_id: tender._id,
//         });
//         if (!attachment) {
//             return res.status(404).json({
//                 message: "Tender Attachment Not Found.",
//                 data: null,
//                 status: 404,
//             });
//         }

//         if (attachment.file_path && fs.existsSync(attachment.file_path)) {
//             fs.unlinkSync(attachment.file_path);
//         }

//         await TenderAttachment.deleteOne({
//             _id: attachment._id,
//         });

//         res.status(200).json({
//             message: "Tender Attachment Deleted Successfully.",
//             data: null,
//             status: 200,
//         });
//     }),
// );

// change status of tender

/**
 * @description Publish tender (DRAFT → PUBLISHED)
 * @route /api/tenders/:tender_id/publish
 * @method POST
 * @access private - PUBLISHER
 */
router.post(
    "/:tender_id/publish",
    verify_token,
    require_permission("TENDER_PUBLISH"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        const tender = await Tender.findById(tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        if (tender.status !== "DRAFT") {
            return res.status(400).json({
                message: "Only DRAFT tenders can be published.",
                data: null,
                status: 400,
            });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to publish this tender.",
                data: null,
                status: 403,
            });
        }

        if (!tender.submission_start || !tender.submission_deadline) {
            return res.status(400).json({
                message: "Submission start and deadline are required.",
                data: null,
                status: 400,
            });
        }
        if (tender.submission_deadline <= tender.submission_start) {
            return res.status(400).json({
                message: "Submission deadline must be after submission start.",
                data: null,
                status: 400,
            });
        }

        tender.status = "PUBLISHED";
        tender.published_at = new Date();
        const result = await tender.save();
        res.status(200).json({
            message: "Tender Published Successfully.",
            data: result,
            status: 200,
        });
    }),
);

/**
 * @description Cancel tender
 * @route /api/tenders/:tender_id/cancel
 * @method POST
 * @access private - PUBLISHER
 * [
 *      DRAFT       ──► CANCELLED
 *      PUBLISHED   ──► CANCELLED
 *      OPEN        ──► CANCELLED
 *      REPUBLISHED ──► CANCELLED
 * ]
 */
router.post(
    "/:tender_id/cancel",
    verify_token,
    require_permission("TENDER_CANCEL"),
    asyncHandler(async (req, res) => {
        const { tender_id } = req.params;

        const tender = await Tender.findById(tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        const cancellableStatuses = [
            "DRAFT",
            "PUBLISHED",
            "OPEN",
            "REPUBLISHED",
        ];
        if (!cancellableStatuses.includes(tender.status)) {
            return res.status(400).json({
                message: `Tender cannot be cancelled while it is in ${tender.status} status.`,
                data: null,
                status: 400,
            });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.org_id) {
            return res.status(403).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 403,
            });
        }

        if (tender.publisher_org_id.toString() !== user.org_id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to cancel this tender.",
                data: null,
                status: 403,
            });
        }

        tender.status = "CANCELLED";
        const result = await tender.save();

        res.status(200).json({
            message: "Tender Cancelled Successfully.",
            data: result,
            status: 200,
        });
    }),
);

// باقي الحالات بعد ما اربط مع المنفذين

module.exports = router;
