const { User } = require("../models/User");
const { Role } = require("../models/Role");

const assign_role_to_user = async (user_id, role_id) => {
    const user = await User.findById(user_id);

    if (!user) {
        return {
            error: "USER_NOT_FOUND",
        };
    }

    const role = await Role.findById(role_id);

    if (!role) {
        return {
            error: "ROLE_NOT_FOUND",
        };
    }

    if (!role.is_active) {
        return {
            error: "ROLE_INACTIVE",
        };
    }

    user.role_id = role._id;

    await user.save();

    return {
        error: null,
        user,
    };
};

module.exports = {
    assign_role_to_user,
};