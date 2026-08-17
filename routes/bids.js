const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { Tender } = require("../models/Tender");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { create_bid_validation } = require("../validators/bid_validation");

/**
 * @description submit a bid for a tender
 * @route /api/tenders/:tenderId/bids
 * @method POST
 * @access private - EXECUTOR
 */
router.post(
    "/:tenderId/bids",
    verify_token,
    authorizeRoles("EXECUTOR"),
    asyncHandler(async (req, res) => {
        const { error, value } = create_bid_validation(req.body);

        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        // التحقق من المناقصة
        const tender = await Tender.findById(req.params.tenderId);

        if (!tender) {
            return res.status(404).json({
                message: "Tender Not Found.",
                data: null,
                status: 404,
            });
        }

        // يجب أن تكون المناقصة مفتوحة
        if (!["OPEN", "PUBLISHED", "REPUBLISHED"].includes(tender.status)) {
            return res.status(403).json({
                message: "Tender is not open for bidding.",
                data: null,
                status: 403,
            });
        }

        // التحقق من انتهاء الموعد
        if (new Date() > tender.submission_deadline) {
            return res.status(403).json({
                message: "Tender submission deadline has passed.",
                data: null,
                status: 403,
            });
        }

        // منع المنفذ من التقديم أكثر من مرة
        const existingBid = await Bid.findOne({
            tender_id: tender._id,
            executor_org_id: req.user.org_id,
        });

        if (existingBid) {
            return res.status(409).json({
                message: "Your organization has already submitted a bid.",
                data: null,
                status: 409,
            });
        }

        const bid = new Bid({
            tender_id: tender._id,
            executor_org_id: req.user.org_id,
            submitted_by: req.user.id,
            bid_amount: req.body.bid_amount,
            technical_proposal: req.body.technical_proposal,
        });

        const result = await bid.save();

        res.status(201).json({
            message: "Bid Submitted Successfully.",
            data: result,
            status: 201,
        });
    }),
);

module.exports = router;
