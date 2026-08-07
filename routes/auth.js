const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const asyncHandler = require("express-async-handler");
const {
    create_user_validation,
    login_validation,
    update_user_validation
} = require("../validators/user_validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");

/**
 * @description register a new mobile user
 * @route /api/auth/mob/register
 * @method POST
 * @access public
 */
router.post(
    "/mob/register",
    asyncHandler(async (req, res) => {
        const { error } = create_user_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({
                message: "Username already exists.",
                data: null,
                status: 400,
            });
        }
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        user = new User(req.body);
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
 * @description register a new web user
 * @route /api/auth/web/register
 * @method POST
 * @access private
 */
router.post(
    "/web/register",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        console.log(req.user);
        if (req.user.id !== req.params.id)
            return res.status(403).json({
                message: "Access denied.",
                data: null,
                status: 403,
            });
        const { error } = create_user_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({
                message: "Username already exists.",
                data: null,
                status: 400,
            });
        }
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        user = new User(req.body);
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
        const user = await User.findOne({ username: req.body.username });
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
        const user = await User.findOne({ username: req.body.username });
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
