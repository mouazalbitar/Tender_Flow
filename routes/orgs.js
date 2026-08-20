const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { Organization } = require("../models/Organization");
const { User } = require("../models/User");
const { verify_token } = require("../middlewares/verify_token");
const {
    require_permission,
} = require("../middlewares/permission_middleware.js");
const {
    create_org_validation,
    update_org_validation,
} = require("../validators/org_validation");
const uploadOrganization = require("../middlewares/upload_organization");

/**
 * @description get all publishers organizations
 * @route /api/orgs/publishers
 * @method GET
 * @access private
 */
router.get(
    "/publishers",
    verify_token,
    require_permission("ORG_READ"),
    asyncHandler(async (req, res) => {
        const orgs = await Organization.find({
            _type: "PUBLISHER",
        });
        res.status(200).json({
            message: "The Operation was Successful.",
            data: orgs,
            status: 200,
        });
    }),
);

/**
 * @description get all executors organizations
 * @route /api/orgs/executors
 * @method GET
 * @access private
 */
router.get(
    "/executors",
    verify_token,
    require_permission("ORG_READ"),
    asyncHandler(async (req, res) => {
        const orgs = await Organization.find({
            _type: "EXECUTOR",
        });
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
 * @access private
 */
router.get(
    "/:id",
    verify_token,
    require_permission("ORG_READ"),
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
 * @description create a new organization for publisher
 * @route /api/orgs/publisher
 * @method POST
 * @access private
 */
router.post(
    "/publisher",
    verify_token,
    uploadOrganization.fields([
        { name: "logo", maxCount: 1 },
        { name: "commercial_register", maxCount: 1 },
        { name: "license", maxCount: 1 },
    ]),
    require_permission("ORG_CREATE"),
    asyncHandler(async (req, res) => {
        const { error } = create_org_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Failed, ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        if (!req.files?.commercial_register || !req.files?.license) {
            return res.status(400).json({
                message: "Commercial register and license are required.",
                data: null,
                status: 400,
            });
        }

        const logo_path = req.files.logo ? req.files.logo[0].path : null;
        const commercial_register_path = req.files.commercial_register[0].path;
        const license_path = req.files.license[0].path;

        const org = new Organization({
            ...req.body,
            _type: "PUBLISHER",
            logo: logo_path,
            commercial_register: commercial_register_path,
            license: license_path,
        });
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
 * @access private
 */
router.put(
    "/:id",
    verify_token,
    require_permission("ORG_UPDATE"),
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
 * @description get all accounts in one org
 * @route /api/orgs/:id/users
 * @method GET
 * @access private
 */
router.get(
    "/:org_id/users",
    verify_token,
    require_permission("USER_READ"),
    asyncHandler(async (req, res) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.org_id)) {
            return res.status(400).json({
                message: "Invalid organization ID.",
                data: null,
                status: 400,
            });
        }
        const users = await User.find({
            org_id: req.params.org_id,
        }).select("-password");
        res.status(200).json({
            message: "The Operation was Successful.",
            data: users,
            status: 200,
        });
    }),
);

// /**
//  * @description delete an organization
//  * @route /api/orgs/:id
//  * @method DELETE
//  * @access public
//  */
// router.delete(
//     "/:id",
//     asyncHandler(async (req, res) => {
//         const org = await Organization.findByIdAndDelete(req.params.id);
//         if (!org) {
//             return res.status(404).json({
//                 message: "Organization not found.",
//                 data: null,
//                 status: 404,
//             });
//         }
//         res.status(200).json({
//             message: "Organization deleted successfully.",
//             data: org,
//             status: 200,
//         });
//     }),
// );

module.exports = router;
