const { User } = require("../models/User");
const asyncHandler = require("express-async-handler");

const require_permission = (permission_code) => {
    return asyncHandler(async (req, res, next) => {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                message: "Authentication required.",
                status: 401,
            });
        }
        
        const user = await User.findById(req.user.id)
        .populate({
            path: "role_id",
            match: { is_active: true },
            populate: {
                path: "permissions",
                match: { is_active: true },
                select: "code is_active",
            },
        })
        .lean();
        
        // console.log("USER:", user._id);
        // console.log("ROLE:", user.role_id.code);
        // console.log(
        //     "PERMISSIONS:",
        //     user.role_id.permissions.map((permission) => permission.code),
        // );
        // console.log("REQUIRED:", permission_code);
        
        if (!user) {
            return res.status(401).json({
                message: "User not found.",
                status: 401,
            });
        }

        if (!user.role_id) {
            return res.status(403).json({
                message: "User does not have a role.",
                status: 403,
            });
        }

        const has_permission = user.role_id.permissions.some(
            (permission) => permission.code === permission_code,
        );

        if (!has_permission) {
            return res.status(403).json({
                message: "You do not have this permission.",
                status: 403,
            });
        }

        next();
    });
};

module.exports = {
    require_permission,
};
