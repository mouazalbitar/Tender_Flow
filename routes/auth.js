const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const asyncHandler = require("express-async-handler");
const {
    create_mobile_user_validation,
    login_validation,
    password_reset_request_validation,
} = require("../validators/user_validation");
const { create_org_validation } = require("../validators/org_validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verify_token } = require("../middlewares/verify_token");
const { authorizeRoles } = require("../middlewares/role_check");
const uploadRegistration = require("../middlewares/upload_registration");
const { OTP } = require("../models/OTP");
const { generate_otp, hash_otp } = require("../utils/otp");
const { send_whatsapp_message } = require("../services/whatsapp_service");
const {
    request_otp_validation,
    verify_otp_validation,
} = require("../validators/otp_validation");
const {
    generate_reset_token,
    hash_reset_token,
} = require("../utils/password_reset_token");
const { PasswordResetToken } = require("../models/PasswordResetToken");
const {
    reset_password_validation,
} = require("../validators/password_reset_validation");

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

        const logo_path = req.files.commercial_register[0].path;
        const commercial_register_path = req.files.license[0].path;
        const license_path = req.files.logo ? req.files.logo[0].path : null;

        const existingUser = await User.findOne({
            username: req.body.user.username,
        });

        if (existingUser) {
            throw new Error("User already exists.");
        }

        const organization = new Organization({
            ...req.body.organization,
            _type: "EXECUTOR",
            logo: logo_path,
            commercial_register: commercial_register_path,
            license: license_path,
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
        const org = await Organization.findById(user.org_id);
        res.status(200).json({
            message: "The Operation was Successful.",
            data: { user: user_data, Organization: org },
            status: 200,
            token: token,
        });
    }),
);

// ----------------------------------
// اذا كان مسجل الدخول

/**
 * @description Send OTP for phone verification
 * @route /api/auth/phone/send-otp
 * @method POST
 * @access private - EXECUTOR
 */
router.post(
    "/phone/send-otp",
    verify_token,
    authorizeRoles("EXECUTOR"),
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        if (!user.phone) {
            return res.status(400).json({
                message: "Phone number is not registered.",
                data: null,
                status: 400,
            });
        }

        if (user.phone_verified) {
            return res.status(400).json({
                message: "Phone number is already verified.",
                data: null,
                status: 400,
            });
        }

        // Delete previous unused OTPs
        await OTP.deleteMany({
            user_id: user._id,
            purpose: "PHONE_VERIFICATION",
            verified: false,
        });

        // Generate OTP
        const otp = generate_otp();

        // Hash OTP
        const otp_hash = hash_otp(otp);

        // OTP expires after 5 minutes
        const expires_at = new Date(Date.now() + 5 * 60 * 1000);

        // Save OTP
        const otp_record = new OTP({
            user_id: user._id,
            otp_hash,
            purpose: "PHONE_VERIFICATION",
            expires_at,
        });

        await otp_record.save();

        // WhatsApp message
        const message = `Your verification code is: ${otp}
        This code is valid for 5 minutes.
        Do not share this code with anyone.`;

        // Send WhatsApp message
        await send_whatsapp_message(user.phone, message);

        res.status(200).json({
            message: "OTP sent successfully.",
            data: null,
            status: 200,
        });
    }),
);

/**
 * @description Verify OTP for phone verification
 * @route /api/auth/phone/verify-otp
 * @method POST
 * @access private - EXECUTOR
 */
router.post(
    "/phone/verify-otp",
    verify_token,
    authorizeRoles("EXECUTOR"),
    asyncHandler(async (req, res) => {
        const { error, value } = verify_otp_validation(req.body);
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

        if (!user.phone) {
            return res.status(400).json({
                message: "Phone number is not registered.",
                data: null,
                status: 400,
            });
        }
        if (user.phone_verified) {
            return res.status(400).json({
                message: "Phone number is already verified.",
                data: null,
                status: 400,
            });
        }
        const otp_record = await OTP.findOne({
            user_id: user._id,
            purpose: "PHONE_VERIFICATION",
        }).sort({
            createdAt: -1,
        });
        if (!otp_record) {
            return res.status(404).json({
                message: "OTP not found.",
                data: null,
                status: 404,
            });
        }
        if (otp_record.expires_at < new Date()) {
            await OTP.deleteOne({
                _id: otp_record._id,
            });
            return res.status(400).json({
                message: "OTP has expired.",
                data: null,
                status: 400,
            });
        }

        if (otp_record.attempts >= 3) {
            await OTP.deleteOne({
                _id: otp_record._id,
            });
            return res.status(429).json({
                message: "Too many incorrect OTP attempts.",
                data: null,
                status: 429,
            });
        }

        const otp_hash = hash_otp(value.otp);
        const is_valid = otp_hash === otp_record.otp_hash;

        if (!is_valid) {
            otp_record.attempts += 1;
            await otp_record.save();
            return res.status(400).json({
                message: "Invalid OTP.",
                data: null,
                status: 400,
            });
        }

        // OTP is correct
        user.phone_verified = true;
        await user.save();
        // Delete used OTP
        await OTP.deleteOne({
            _id: otp_record._id,
        });
        return res.status(200).json({
            message: "Phone number verified successfully.",
            data: {
                phone_verified: true,
            },
            status: 200,
        });
    }),
);
// ----------------------------------

// نسيان كلمة المرور
// phone verfy
/**
 * @description Request OTP for password reset
 * @route /api/auth/password/request-otp
 * @method POST
 * @access public
 */
router.post(
    "/password/request-otp",
    asyncHandler(async (req, res) => {
        const { error, value } = password_reset_request_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const user = await User.findOne({
            username: value.username,
        });

        if (!user) {
            return res.status(404).json({
                message: "No account is associated with this username.",
                data: null,
                status: 404,
            });
        }

        if (user.status !== "ACTIVE") {
            return res.status(403).json({
                message: "This account is not active.",
                data: null,
                status: 403,
            });
        }

        if (!user.phone_verified) {
            return res.status(400).json({
                message:
                    "Phone number verification is requiredK no way to reset password online.",
                data: null,
                status: 400,
            });
        }

        await OTP.deleteMany({
            user_id: user._id,
            purpose: "PASSWORD_RESET",
        });

        const otp = generate_otp();
        const otp_hash = hash_otp(otp);
        const expires_at = new Date(Date.now() + 5 * 60 * 1000);
        const otp_record = new OTP({
            user_id: user._id,
            otp_hash,
            purpose: "PASSWORD_RESET",
            expires_at,
            attempts: 0,
        });
        await otp_record.save();
        const message = `Your password reset verification code is: ${otp}
        This code is valid for 5 minutes.
        Do not share this code with anyone.`;
        await send_whatsapp_message(user.phone, message);

        return res.status(200).json({
            message: "Password reset OTP sent successfully.",
            data: null,
            status: 200,
        });
    }),
);

/**
 * @description Verify OTP for password reset
 * @route /api/auth/password/verify-otp
 * @method POST
 * @access public
 */
router.post(
    "/password/verify-otp",
    asyncHandler(async (req, res) => {
        const { error, value } = verify_otp_validation(req.body);
        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        const user = await User.findOne({
            username: value.username,
        });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        const otp_record = await OTP.findOne({
            user_id: user._id,
            purpose: "PASSWORD_RESET",
        }).sort({
            createdAt: -1,
        });

        if (!otp_record) {
            return res.status(404).json({
                message: "OTP not found.",
                data: null,
                status: 404,
            });
        }

        if (otp_record.expires_at < new Date()) {
            await OTP.deleteOne({
                _id: otp_record._id,
            });

            return res.status(400).json({
                message: "OTP has expired.",
                data: null,
                status: 400,
            });
        }

        if (otp_record.attempts >= 3) {
            await OTP.deleteOne({
                _id: otp_record._id,
            });

            return res.status(429).json({
                message: "Too many incorrect OTP attempts.",
                data: null,
                status: 429,
            });
        }

        const otp_hash = hash_otp(value.otp);
        const is_valid = otp_hash === otp_record.otp_hash;

        if (!is_valid) {
            otp_record.attempts += 1;
            await otp_record.save();
            return res.status(400).json({
                message: "Invalid OTP.",
                data: null,
                status: 400,
            });
        }
        const reset_token = generate_reset_token();

        // Hash reset token
        const reset_token_hash = hash_reset_token(reset_token);

        // Delete previous reset tokens
        await PasswordResetToken.deleteMany({
            user_id: user._id,
        });

        // Reset token expires after 10 minutes
        const expires_at = new Date(Date.now() + 10 * 60 * 1000);

        // Save reset token
        const reset_token_record = new PasswordResetToken({
            user_id: user._id,
            token_hash: reset_token_hash,
            expires_at,
        });

        await reset_token_record.save();

        // Delete used OTP
        await OTP.deleteOne({
            _id: otp_record._id,
        });

        return res.status(200).json({
            message: "OTP verified successfully.",
            data: {
                reset_token,
            },
            status: 200,
        });
    }),
);

/**
 * @description Reset password using reset token
 * @route /api/auth/password/reset
 * @method POST
 * @access public
 */
router.post(
    "/password/reset",
    asyncHandler(async (req, res) => {
        const { error, value } = reset_password_validation(req.body);

        if (error) {
            return res.status(400).json({
                message: `Validation Error: ${error.details[0].message}`,
                data: null,
                status: 400,
            });
        }

        // =========================
        // Hash reset token
        // =========================

        const token_hash = hash_reset_token(value.reset_token);

        // =========================
        // Find reset token
        // =========================

        const reset_token_record = await PasswordResetToken.findOne({
            token_hash,
        });

        if (!reset_token_record) {
            return res.status(400).json({
                message: "Invalid or expired reset token.",
                data: null,
                status: 400,
            });
        }

        // =========================
        // Check expiration
        // =========================

        if (reset_token_record.expires_at < new Date()) {
            await PasswordResetToken.deleteOne({
                _id: reset_token_record._id,
            });

            return res.status(400).json({
                message: "Reset token has expired.",
                data: null,
                status: 400,
            });
        }

        // =========================
        // Find user
        // =========================

        const user = await User.findById(reset_token_record.user_id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found.",
                data: null,
                status: 404,
            });
        }

        // =========================
        // Hash new password
        // =========================

        const hashed_password = await bcrypt.hash(value.password, 10);

        user.password = hashed_password;

        await user.save();

        // =========================
        // Delete reset token
        // =========================

        await PasswordResetToken.deleteOne({
            _id: reset_token_record._id,
        });

        return res.status(200).json({
            message: "Password reset successfully.",
            data: null,
            status: 200,
        });
    }),
);

module.exports = router;
