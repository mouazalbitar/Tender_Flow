const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const { User } = require("../models/User");
const {
    create_user_validation,
    update_user_validation,
    reject_user_validation,
    bann_user_validation,
} = require("../validators/user_validation");
const bcrypt = require("bcryptjs");
const upload_id_cards = require("../middlewares/upload_id_cards");

/**
 * @description get all users
 * @route /api/users
 * @method GET
 * @access private
 */
router.get(
    "/",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        const users = await User.find();
        res.status(200).json({
            message: "The Operation was Successful.",
            data: users,
            status: 200,
        });
    }),
);

/**
 * @description get user by id
 * @route /api/users/:id
 * @method GET
 * @access private
 */
router.get(
    "/:id",
    verify_token,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

/**
 * @description register a new web user
 * @route /api/users/
 * @method POST
 * @access private
 */
router.post(
    "/",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        console.log(req.user);
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
        user = new User({
            ...req.body,
            type: "PUBLISHER",
            status: "ACTIVE",
            id_card_front: "null",
            id_card_back: "null",
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
 * @description update user by id
 * @route /api/users/:id
 * @method PUT
 * @access private
 */
router.put(
    "/:id",
    verify_token,
    upload_id_cards.fields([
        { name: "front", maxCount: 1 },
        { name: "back", maxCount: 1 },
    ]),
    asyncHandler(async (req, res) => {
        const { error } = update_user_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const updateData = { ...req.body };

        if (req.files?.front) {
            updateData.id_card_front = req.files.front[0].path;
        }
        if (req.files?.back) {
            updateData.id_card_back = req.files.back[0].path;
        }

        const user = await User.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

/**
 * @description delete user by id
 * @route /api/users/:id
 * @method DELETE
 * @access private
 */
router.delete(
    "/:id",
    verify_token,
    asyncHandler(async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        const { password, ...user_data } = user._doc;
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user_data,
            status: 200,
        });
    }),
);

/**
 * @description change user status by id to ACTIVE
 * @route /api/users/accept/:id
 * @method PUT
 * @access private
 */
router.put(
    "/accept/:id",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { status: "ACTIVE" },
            { new: true },
        );
        if (req.user.id === req.params.id)
            return res.status(403).json({
                message: "You cannot do it for yourself.",
                data: null,
                status: 403,
            });
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        if (req.user.id.toString() === req.params.id)
            return res.status(403).json({
                message: "You cannot ban yourself.",
                data: null,
                status: 403,
            });
        const { password, ...user_data } = user._doc;
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user_data,
            status: 200,
        });
    }),
);

/**
 * @description change user status by id to REJECTED
 * @route /api/users/reject/:id
 * @method PUT
 * @access private
 */
router.put(
    "/reject/:id",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        const { error } = reject_user_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        if (req.user.id === req.params.id)
            return res.status(403).json({
                message: "You cannot do it for yourself.",
                data: null,
                status: 403,
            });

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                status: "REJECTED",
                reject_message: req.body.reject_message,
            },
            { new: true },
        );
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

/**
 * @description change user status by id to PENDING, this for mobile user
 * @route /api/users/resend/:id
 * @method PUT
 * @access private
 */
router.put(
    "/resend/:id",
    verify_token,
    asyncHandler(async (req, res) => {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { status: "PENDING", bann_message: null, reject_message: null },
            { new: true },
        );
        if (req.user.id === req.params.id)
            return res.status(403).json({
                message: "You cannot do it for yourself.",
                data: null,
                status: 403,
            });
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

/**
 * @description change user status by id to BANNED
 * @route /api/users/ban/:id
 * @method PUT
 * @access private
 */
router.put(
    "/ban/:id",
    verify_token,
    authorizeRoles("ADMIN"),
    asyncHandler(async (req, res) => {
        const { error } = bann_user_validation(req.body);
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { status: "BANNED", bann_message: req.body.bann_message },
            { new: true },
        );
        if (req.user.id === req.params.id)
            return res.status(403).json({
                message: "You cannot do it for yourself.",
                data: null,
                status: 403,
            });
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                data: null,
                status: 404,
            });
        }
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

module.exports = router;
