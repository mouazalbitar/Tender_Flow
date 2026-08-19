const asyncHandler = require("express-async-handler");

const {
    assign_role_to_user,
} = require("../services/user_role_service");

const assign_role = asyncHandler(async (req, res) => {
    const result = await assign_role_to_user(
        req.params.id,
        req.body.role_id,
    );

    if (result.error === "USER_NOT_FOUND") {
        return res.status(404).json({
            message: "User not found.",
            status: 404,
        });
    }

    if (result.error === "ROLE_NOT_FOUND") {
        return res.status(404).json({
            message: "Role not found.",
            status: 404,
        });
    }

    if (result.error === "ROLE_INACTIVE") {
        return res.status(400).json({
            message: "Cannot assign an inactive role.",
            status: 400,
        });
    }

    return res.status(200).json({
        message: "Role assigned to user successfully.",
        data: result.user,
        status: 200,
    });
});

module.exports = {
    assign_role,
};