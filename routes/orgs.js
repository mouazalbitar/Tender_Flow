const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Organization } = require("../models/Organization");
const {
    create_org_validation,
    update_org_validation,
} = require("../validators/org_validation");

/**
 * @description get all organizations
 * @route /api/orgs
 * @method GET
 * @access public
 */
router.get(
    "/orgs",
    asyncHandler(async (req, res) => {
        const orgs = await Organization.find();
        res.status(200).json({
            message: "The Operation was Successful.",
            data: orgs,
            status: 200,
        });
    }),
);

/**
 * @description find a specific organization by id
 * @route /api/orgs/:id
 * @method GET
 * @access public
 */
router.get(
    "/orgs/:id",
    asyncHandler(async (req, res) => {
        const org = await Organization.findById(req.params.id);
        if (!org) {
            return res.status(404).json({
                message: "Organization not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: org,
            status: 200,
        });
    }),
);

/**
 * @description create a new organization
 * @route /api/orgs
 * @method POST
 * @access public
 */
router.post(
    "/orgs",
    asyncHandler(async (req, res) => {
        const { error } = create_org_validation(req.body);
        if (error) {
            const messages = error.details.map((err) => err.message);
            return res.status(400).json({
                message: `Validation Failed, ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        const org = new Organization(req.body);
        const result = await org.save();
        res.status(201).json({
            message: "Organization Created successfully.",
            data: result,
            status: 201,
        });
    }),
);

/**
 * @description update an existing organization
 * @route /api/orgs/:id
 * @method PUT
 * @access public
 */
router.put(
    "/orgs/:id",
    asyncHandler(async (req, res) => {
        const { error } = update_org_validation(req.body);
        if (error) {
            const messages = error.details.map((err) => err.message);
            return res.status(400).json({
                message: `Validation Failed, ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        const org = await Organization.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true },
        );
        if (!org) {
            return res.status(404).json({
                message: "Organization not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "Organization updated successfully.",
            data: org,
            status: 200,
        });
    }),
);

/**
 * @description delete an organization
 * @route /api/orgs/:id
 * @method DELETE
 * @access public
 */
router.delete(
    "/orgs/:id",
    asyncHandler(async (req, res) => {
        const org = await Organization.findByIdAndDelete(req.params.id);
        if (!org) {
            return res.status(404).json({
                message: "Organization not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "Organization deleted successfully.",
            data: org,
            status: 200,
        });
    }),
);

module.exports = router;
