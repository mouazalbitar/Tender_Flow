const permission_service = require("../services/permission_service");
const asyncHandler = require("express-async-handler");

const get_permissions = asyncHandler(async (req, res) => {
    const permissions = await permission_service.get_permissions();

    return res.status(200).json({
        message: "Permissions retrieved successfully.",
        permissions,
        status: 200,
    });
});

const get_permission_by_id = asyncHandler(async (req, res) => {
    const permission = await permission_service.get_permission_by_id(
        req.params.id,
    );

    if (!permission) {
        return res.status(404).json({
            message: "Permission not found.",
            status: 404,
        });
    }

    return res.status(200).json({
        message: "Permission retrieved successfully.",
        data: permission,
        status: 200,
    });
});

module.exports = {
    get_permissions,
    get_permission_by_id,
};
