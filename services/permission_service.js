const { Permission } = require("../models/Permission");

const get_permissions = async (filters = {}) => {
    const query = {};

    if (filters.module) {
        query.module = filters.module;
    }

    if (filters.is_active !== undefined) {
        query.is_active = filters.is_active;
    }

    return await Permission.find(query).sort({ module: 1, code: 1 }).lean();
};

const get_permission_by_id = async (id) => {
    return await Permission.findById(id).lean();
};

module.exports = {
    get_permissions,
    get_permission_by_id,
};
