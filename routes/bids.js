const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { Tender } = require("../models/Tender");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { Bid } = require("../models/Bid");
const { create_bid_validation } = require("../validators/bid_validation");
const upload_bid = require("../middlewares/upload_bid");

/**
 * @description Submit a bid for a tender
 * @route /api/bids
 * @method POST
 * @access private - EXECUTOR
 */
router.post(
    "/",
    verify_token,
    authorizeRoles("EXECUTOR"),
    upload_bid.single("technical_proposal"),
    asyncHandler(async (req, res) => {
        const { error, value } = create_bid_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Technical proposal PDF is required.",
                data: null,
                status: 400,
            });
        }

        const tender = await Tender.findById(value.tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender not found.",
                data: null,
                status: 404,
            });
        }

        if (tender.status !== "OPEN") {
            return res.status(400).json({
                message: "Bids can only be submitted for open tenders.",
                data: null,
                status: 400,
            });
        }

        const now = new Date();
        if (now < tender.submission_start) {
            return res.status(400).json({
                message: "Bid submission has not started yet.",
                data: null,
                status: 400,
            });
        }

        if (now > tender.submission_deadline) {
            return res.status(400).json({
                message: "The bid submission deadline has passed.",
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
            return res.status(400).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 400,
            });
        }

        const existing_bid = await Bid.findOne({
            tender_id: tender._id,
            executor_org_id: user.org_id,
        });
        if (existing_bid) {
            return res.status(409).json({
                message:
                    "Your organization has already submitted a bid for this tender.",
                data: null,
                status: 409,
            });
        }

        if (tender.currency && tender.currency !== value.currency) {
            return res.status(400).json({
                message: "Bid currency must match the tender currency.",
                data: null,
                status: 400,
            });
        }

        const bid = new Bid({
            tender_id: tender._id,
            executor_org_id: user.org_id,
            offered_value: value.offered_value,
            currency: value.currency,
            technical_proposal_file: req.file.path,
            notes: value.notes,
            status: "SUBMITTED",
        });

        await bid.save();
        return res.status(201).json({
            message: "Bid submitted successfully.",
            data: bid,
            status: 201,
        });
    }),
);

/**
 * @description Get bids for a tender
 * @route /api/bids/tender/:tender_id
 * @method GET
 * @access private - ADMIN / PUBLISHER
 */
router.get(
    "/tender/:tender_id",
    verify_token,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        const tender = await Tender.findById(req.params.tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender not found.",
                data: null,
                status: 404,
            });
        }

        if (user.type === "ADMIN") {
            const bids = await Bid.find({
                tender_id: tender._id,
            }).populate("executor_org_id", "org_name");
            return res.status(200).json({
                message: "Bids retrieved successfully.",
                data: bids,
                status: 200,
            });
        }

        if (user.type === "PUBLISHER") {
            if (
                !user.org_id ||
                user.org_id.toString() !== tender.publisher_org_id.toString()
            ) {
                return res.status(403).json({
                    message:
                        "You are not authorized to view bids for this tender.",
                    data: null,
                    status: 403,
                });
            }

            const bids = await Bid.find({
                tender_id: tender._id,
            }).populate("executor_org_id", "org_name");
            return res.status(200).json({
                message: "Bids retrieved successfully.",
                data: bids,
                status: 200,
            });
        }

        return res.status(403).json({
            message: "You are not authorized to view bids.",
            data: null,
            status: 403,
        });
    }),
);

/**
 * @description Get executor's bid for a tender
 * @route /api/bids/my-bids/:tender_id
 * @method GET
 * @access private - EXECUTOR
 */
router.get(
    "/my-bids/:tender_id",
    verify_token,
    authorizeRoles("EXECUTOR"),
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
            return res.status(400).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 400,
            });
        }

        const tender = await Tender.findById(req.params.tender_id);
        if (!tender) {
            return res.status(404).json({
                message: "Tender not found.",
                data: null,
                status: 404,
            });
        }
        const bid = await Bid.findOne({
            tender_id: tender._id,
            executor_org_id: user.org_id,
        }).populate("executor_org_id", "org_name");

        if (!bid) {
            return res.status(404).json({
                message:
                    "Your organization has not submitted a bid for this tender.",
                data: null,
                status: 404,
            });
        }

        return res.status(200).json({
            message: "Bid retrieved successfully.",
            data: bid,
            status: 200,
        });
    }),
);

/**
 * @description Get all bids submitted by the executor organization
 * @route /api/bids/my-bids
 * @method GET
 * @access private - EXECUTOR
 */
router.get(
    "/my-bids",
    verify_token,
    authorizeRoles("EXECUTOR"),
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
            return res.status(400).json({
                message: "User is not associated with an organization.",
                data: null,
                status: 400,
            });
        }
        const bids = await Bid.find({
            executor_org_id: user.org_id,
        })
            .populate(
                "tender_id",
                "title description status submission_start submission_deadline estimated_value currency execution_location",
            )
            .populate("executor_org_id", "org_name")
            .sort({
                createdAt: -1,
            });

        return res.status(200).json({
            message: "Your bids retrieved successfully.",
            data: bids,
            status: 200,
        });
    }),
);

module.exports = router;
