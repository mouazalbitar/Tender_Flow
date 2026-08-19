const { Role } = require("../models/Role");
const { Permission } = require("../models/Permission");

const get_roles = async () => {
    return await Role.find()
        .populate({
            path: "permissions",
            select: "code name name_ar module is_active",
        })
        .sort({ code: 1 })
        .lean();
};

const get_role_by_id = async (id) => {
    return await Role.findById(id)
        .populate({
            path: "permissions",
            select: "code name name_ar module is_active",
        })
        .lean();
};

const validate_permissions = async (permission_ids) => {
    if (!permission_ids || permission_ids.length === 0) {
        return [];
    }

    const permissions = await Permission.find({
        _id: { $in: permission_ids },
    }).select("_id");

    const existing_ids = new Set(
        permissions.map((permission) => permission._id.toString()),
    );

    const missing_ids = permission_ids.filter(
        (id) => !existing_ids.has(id.toString()),
    );

    if (missing_ids.length > 0) {
        const error = new Error(
            `Permissions not found: ${missing_ids.join(", ")}`,
        );
        error.status = 400;
        throw error;
    }
    return permission_ids;
};

const create_role = async (data) => {
    const existing_code = await Role.findOne({
        code: data.code,
    });

    if (existing_code) {
        const error = new Error("Role code already exists.");
        error.status = 409;
        throw error;
    }

    const existing_name = await Role.findOne({
        name: data.name,
    });

    if (existing_name) {
        const error = new Error("Role name already exists.");
        error.status = 409;
        throw error;
    }

    const permissions = await validate_permissions(data.permissions);

    return await Role.create({
        code: data.code,
        name: data.name,
        name_ar: data.name_ar,
        description: data.description,
        permissions,
        is_active: data.is_active,
    });
};

const update_role = async (id, data) => {
    const role = await Role.findById(id);

    if (!role) {
        const error = new Error("Role not found.");

        error.status = 404;

        throw error;
    }

    if (data.code && data.code !== role.code) {
        const existing_code = await Role.findOne({
            code: data.code,
            _id: { $ne: id },
        });

        if (existing_code) {
            const error = new Error("Role code already exists.");
            error.status = 409;
            throw error;
        }
    }

    if (data.name && data.name !== role.name) {
        const existing_name = await Role.findOne({
            name: data.name,
            _id: { $ne: id },
        });

        if (existing_name) {
            const error = new Error("Role name already exists.");
            error.status = 409;
            throw error;
        }
    }

    if (data.permissions) {
        await validate_permissions(data.permissions);
    }

    Object.assign(role, data);

    await role.save();

    return role;
};

// const delete_role = async (id) => {
//     const role = await Role.findById(id);

//     if (!role) {
//         const error = new Error("Role not found.");
//         error.status = 404;
//         throw error;
//     }

//     await Role.findByIdAndDelete(id);

//     return role;
// };

const add_permission_to_role = async (role_id, permission_id) => {
    const role = await Role.findById(role_id);

    if (!role) {
        const error = new Error("Role not found.");
        error.status = 404;
        throw error;
    }

    if (!role.is_active) {
        const error = new Error("Cannot modify an inactive role.");
        error.status = 409;
        throw error;
    }

    const permission = await Permission.findById(permission_id);

    if (!permission) {
        const error = new Error("Permission not found.");
        error.status = 404;
        throw error;
    }

    if (!permission.is_active) {
        const error = new Error("Cannot assign an inactive permission.");
        error.status = 409;
        throw error;
    }

    const already_exists = role.permissions.some(
        (permission_id) =>
            permission_id.toString() === permission._id.toString(),
    );

    if (already_exists) {
        const error = new Error("Permission is already assigned to this role.");
        error.status = 409;
        throw error;
    }

    role.permissions.push(permission._id);

    await role.save();

    return await Role.findById(role_id)
        .populate({
            path: "permissions",
            select: "code name name_ar module is_active",
        })
        .lean();
};

module.exports = {
    get_roles,
    get_role_by_id,
    create_role,
    update_role,
    // delete_role,
    add_permission_to_role
};
