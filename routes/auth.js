const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const asyncHandler = require("express-async-handler");
const {
    create_mobile_user_validation,
    login_validation,
} = require("../validators/user_validation");
const { create_org_validation } = require("../validators/org_validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const uploadRegistration = require("../middlewares/upload_registration");

/**
 * @description register a new mobile user & his organization
 * @route /api/auth/mob/register
 * @method POST
 * @access public
 */
router.post(
    "/mob/register",

    uploadRegistration.fields([
        { name: "front", maxCount: 1 },
        { name: "back", maxCount: 1 },
        { name: "logo", maxCount: 1 },
        { name: "commercial_register", maxCount: 1 },
        { name: "license", maxCount: 1 },
    ]),

    asyncHandler(async (req, res) => {
        req.body.organization = JSON.parse(req.body.organization);
        req.body.user = JSON.parse(req.body.user);

        const { error: error1 } = create_org_validation(req.body.organization);

        const { error: error2 } = create_mobile_user_validation(req.body.user);

        if (error1 || error2) {
            throw new Error(
                error1 ? error1.details[0].message : error2.details[0].message,
            );
        }

        if (!req.files?.front || !req.files?.back) {
            throw new Error("Both front and back ID card images are required.");
        }
        if (!req.files?.commercial_register || !req.files?.license) {
            throw new Error(
                "Commercial register and license images are required.",
            );
        }

        const frontPath = req.files.front[0].path;
        const backPath = req.files.back[0].path;

        const commercialRegisterPath = req.files.commercial_register[0].path;

        const licensePath = req.files.license[0].path;

        const logoPath = req.files.logo ? req.files.logo[0].path : null;

        const existingUser = await User.findOne({
            username: req.body.user.username,
        });

        if (existingUser) {
            throw new Error("User already exists.");
        }

        const organization = new Organization({
            ...req.body.organization,
            _type: "EXECUTOR",
        });

        const savedOrganization = await organization.save();

        const hashedPassword = await bcrypt.hash(req.body.user.password, 10);

        const user = new User({
            ...req.body.user,
            org_id: savedOrganization._id,
            password: hashedPassword,
            type: "EXECUTOR",
            id_card_front: frontPath,
            id_card_back: backPath,
        });

        let result;
        try {
            result = await user.save();
        } catch (error) {
            await Organization.findByIdAndDelete(savedOrganization._id);

            throw error;
        }

        const { password, ...user_data } = result._doc;

        return res.status(201).json({
            message: "The Operation was Successful.",
            data: user_data,
            status: 201,
        });
    }),
);

/**
 * @description login a website user
 * @route /api/auth/web/login
 * @method POST
 * @access public
 */
router.post(
    "/web/login",
    asyncHandler(async (req, res) => {
        const { error } = login_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        const user = await User.findOne({ username: req.body.username }).select(
            "+password",
        );
        if (!user) {
            return res.status(404).json({
                message: "Invalid username or password.",
                data: null,
                status: 404,
            });
        }
        if (user.type === "EXECUTOR") {
            return res.status(403).json({
                message: "Access denied.",
                data: null,
                status: 403,
            });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(404).json({
                message: "Invalid username or password.",
                data: null,
                status: 404,
            });
        }
        const token = jwt.sign(
            { id: user._id, type: user.type },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "8h" },
        );
        const { password, ...user_data } = user._doc;
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user_data,
            status: 200,
            token: token,
        });
    }),
);

/**
 * @description login a mobile user
 * @route /api/auth/mob/login
 * @method POST
 * @access public
 */
router.post(
    "/mob/login",
    asyncHandler(async (req, res) => {
        const { error } = login_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        const user = await User.findOne({ username: req.body.username }).select(
            "+password",
        );
        if (!user)
            return res.status(404).json({
                message: "Invalid username or password.",
                data: null,
                status: 404,
            });
        if (user.type !== "EXECUTOR")
            return res.status(403).json({
                message: "Access denied.",
                data: null,
                status: 403,
            });
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch)
            return res.status(404).json({
                message: "Invalid username or password.",
                data: null,
                status: 404,
            });
        const token = jwt.sign(
            { id: user._id, type: user.type },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "8h" },
        );
        const { password, ...user_data } = user._doc;
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user_data,
            status: 200,
            token: token,
        });
    }),
);

module.exports = router;
