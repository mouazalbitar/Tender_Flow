const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { verify_token } = require("../middlewares/verify_token");
const { User } = require("../models/User");
const { update_user_validation } = require("../validators/user_validation");

/**
 * @description get all users
 * @route /api/users
 * @method GET
 * @access private
 */
router.get(
    "/",
    verify_token,
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
 * @description update user by id
 * @route /api/users/:id
 * @method PUT
 * @access private
 */
router.put(
    "/:id",
    verify_token,
    asyncHandler(async (req, res) => {
        const { error } = update_user_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
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
        res.status(200).json({
            message: "The Operation was Successful.",
            data: user,
            status: 200,
        });
    }),
);

module.exports = router;
