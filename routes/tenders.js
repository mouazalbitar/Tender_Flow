const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { Tender } = require("../models/Tender");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { TenderAttachment } = require("../models/TenderAttachment");
const { create_tender_validation } = require("../validators/tender_validation");
const {
    create_tender_attachment_validation,
} = require("../validators/tender_attachment_validation");
const {
    upload_tender_attachment,
} = require("../middlewares/upload_tender_attachment");

/**
 * @description get all tenders in the system for admin
 * @route /api/tenders/all
 * @method GET
 * @access private - ADMIN
 */
router.get(
    "/all",
    verify_token,
    authorizeRoles("ADMIN"),
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
 * @description get tenders for users
 * @route /api/tenders
 * @method GET
 * @access private - PUBLISHER / EXECUTOR
 */
router.get(
    "/",
    verify_token,
    authorizeRoles("PUBLISHER", "EXECUTOR"),
    asyncHandler(async (req, res) => {
        let tenders;
        // =========================
        // PUBLISHER
        // =========================
        if (req.user.type === "PUBLISHER") {
            tenders = await Tender.find({
                publisher_org_id: req.user.org_id,
            }).sort({ createdAt: -1 });
        }
        // =========================
        // EXECUTOR
        // =========================
        else if (req.user.type === "EXECUTOR") {
            tenders = await Tender.find({
                status: {
                    $in: ["PUBLISHED", "OPEN", "REPUBLISHED"],
                },
            }).sort({ createdAt: -1 });
        }
        res.status(200).json({
            message: "The Operation was Successfully.",
            data: tenders,
            status: 200,
        });
    }),
);

/**
 * @description get tender details with requirements
 * @route /api/tenders/:tender_id
 * @method GET
 * @access private - PUBLISHER / EXECUTOR
 */
router.get(
    "/:tender_id",
    verify_token,
    authorizeRoles("PUBLISHER", "EXECUTOR", "ADMIN"),
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

        if (req.user.type === "PUBLISHER") {
            if (
                tender.publisher_org_id._id.toString() !==
                req.user.org_id.toString()
            ) {
                return res.status(403).json({
                    message: "You are not authorized to view this tender.",
                    data: null,
                    status: 403,
                });
            }
        }

        if (req.user.type === "EXECUTOR") {
            if (!["PUBLISHED", "OPEN", "REPUBLISHED"].includes(tender.status)) {
                return res.status(403).json({
                    message: "This tender is not available.",
                    data: null,
                    status: 403,
                });
            }
        }

        const requirements = await TenderRequirements.findOne({
            tender_id: tender._id,
        });

        res.status(200).json({
            message: "Tender Retrieved Successfully.",
            data: {
                tender,
                requirements,
            },
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
    authorizeRoles("PUBLISHER"),
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
 * @description Add tender attachment
 * @route /api/tenders/:tender_id/attachments
 * @method POST
 * @access private - PUBLISHER
 */
router.post(
    "/:tender_id/attachments",
    verify_token,
    authorizeRoles("PUBLISHER"),
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
        const { error, value } =
            create_tender_attachment_validation(req.body);
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

        if (
            tender.publisher_org_id.toString() !==
            user.org_id.toString()
        ) {
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

module.exports = router;
