const role_service = require("../services/role_service");
const asyncHandler = require("express-async-handler");

const get_roles = asyncHandler(async (req, res) => {
    const roles = await role_service.get_roles();
    return res.status(200).json({
        message: "Roles retrieved successfully.",
        data: roles,
        status: 200,
    });
});

const get_role_by_id = asyncHandler(async (req, res) => {
    const role = await role_service.get_role_by_id(req.params.id);

    if (!role) {
        return res.status(404).json({
            message: "Role not found.",
            status: 404,
        });
    }

    return res.status(200).json({
        message: "Role retrieved successfully.",
        data: role,
        status: 200,
    });
});

const create_role = asyncHandler(async (req, res) => {
    const role = await role_service.create_role(req.body);

    return res.status(201).json({
        message: "Role created successfully.",
        data: role,
        status: 201,
    });
});

const update_role = asyncHandler(async (req, res) => {
    const role = await role_service.update_role(req.params.id, req.body);

    return res.status(200).json({
        message: "Role updated successfully.",
        data: role,
        status: 200,
    });
});

// const delete_role = asyncHandler(async (req, res) => {
//     await role_service.delete_role(req.params.id);

//     return res.status(200).json({
//         message: "Role deleted successfully.",
//         status: 200,
//     });
// });

const add_permission_to_role = asyncHandler(async (req, res) => {
    const role = await role_service.add_permission_to_role(
        req.params.id,
        req.body.permission_id,
    );

    return res.status(200).json({
        message: "Permission added to role successfully.",
        data: role,
    });
});

const remove_permission_from_role = asyncHandler(async (req, res) => {
    const role = await role_service.remove_permission_from_role(
        req.params.role_id,
        req.params.permission_id,
    );

    return res.status(200).json({
        message: "Permission removed from role successfully.",
        data: role,
    });
});


module.exports = {
    get_roles,
    get_role_by_id,
    create_role,
    update_role,
    // delete_role,
    add_permission_to_role,
    remove_permission_from_role,
};
