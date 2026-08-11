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

/**
 * @description register a new mobile user & his organiztion
 * @route /api/auth/mob/register
 * @method POST
 * @access public
 */
router.post(
    "/mob/register",
    asyncHandler(async (req, res) => {
        const { error: error1 } = create_org_validation(req.body.organization);
        const { error: error2 } = create_mobile_user_validation(req.body.user);
        if (error1 || error2) {
            return res.status(400).json({
                message: `Validation Error: ${
                    error1
                        ? error1.details[0].message
                        : error2.details[0].message
                }`,
                data: null,
                status: 400,
            });
        }

        let user = await User.findOne({ username: req.body.user.username });

        if (user) {
            return res.status(400).json({
                message: "User already exists.",
                data: null,
                status: 400,
            });
        }

        const organization = new Organization({
            ...req.body.organization,
            _type: "EXECUTOR",
        });
        const savedOrganization = await organization.save();

        const hashedPassword = await bcrypt.hash(req.body.user.password, 10);

        user = new User({
            org_id: savedOrganization._id,
            password: hashedPassword,
            type: "EXECUTOR",
            ...req.body.user,
        });
        const result = await user.save();

        const { password, ...user_data } = result._doc;

        res.status(201).json({
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
