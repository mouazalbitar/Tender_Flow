const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { Tender } = require("../models/Tender");
const { create_tender_validation } = require("../validators/tender_validation");

/**
 * @description create a new tender
 * @route /api/tenders
 * @method POST
 * @access private
 */
router.post(
    "/",
    verify_token,
    asyncHandler(async (req, res) => {
        const { error } = create_tender_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const tender = new Tender({
            ...req.body,
            publisher_org_id: req.user.org_id,
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