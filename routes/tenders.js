const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { Tender } = require("../models/Tender");
const { create_tender_validation } = require("../validators/tender_validation");

/**
 * @description get all tenders in the system
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
 * @description get tenders
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
 * @description create a new tender
 * @route /api/tenders
 * @method POST
 * @access private - PUBLISHER
 */
router.post(
    "/",
    verify_token,
    authorizeRoles("PUBLISHER", "ADMIN"),
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
        if (organization.type !== "PUBLISHER") {
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

module.exports = router;
