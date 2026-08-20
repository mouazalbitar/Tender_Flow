const express = require("express");
const {
    get_roles,
    get_role_by_id,
    create_role,
    update_role,
    delete_role,
    add_permission_to_role,
    remove_permission_from_role,
} = require("../controllers/role_controller");
const {
    create_role_validation,
    update_role_validation,
    get_role_validation,
    add_permission_to_role_validation,
    remove_permission_from_role_validation,
} = require("../validators/role_validation");
const { verify_token } = require("../middlewares/verify_token");
const { require_permission } = require("../middlewares/permission_middleware");
const router = express.Router();

const validate = (schema, source = "body") => {
    return (req, res, next) => {
        const { error } = schema.validate(req[source], {
            abortEarly: false,
            allowUnknown: false,
        });

        if (error) {
            return res.status(400).json({
                message: error.details.map((detail) => detail.message),
                status: 400,
            });
        }

        next();
    };
};

router.get(
    "/",
    verify_token,
    require_permission("SYSTEM_MANAGE_ROLES"),
    get_roles,
);

router.get(
    "/:id",
    verify_token,
    require_permission("SYSTEM_MANAGE_ROLES"),
    validate(get_role_validation, "params"),
    get_role_by_id,
);

router.post(
    "/",
    verify_token,
    require_permission("SYSTEM_MANAGE_ROLES"),
    validate(create_role_validation),
    create_role,
);

router.patch(
    "/:id",
    verify_token,
    require_permission("SYSTEM_MANAGE_ROLES"),
    validate(get_role_validation, "params"),
    validate(update_role_validation),
    update_role,
);

// router.delete(
//     "/:id",
//     verify_token,
//     require_permission("SYSTEM_MANAGE_ROLES"),
//     validate(get_role_validation, "params"),
//     delete_role,
// );

router.post(
    "/:id/permissions",
    verify_token,
    validate(get_role_validation, "params"),
    validate(add_permission_to_role_validation, "body"),
    require_permission("SYSTEM_MANAGE_ROLES"),
    add_permission_to_role,
);

router.delete(
    "/:role_id/permissions/:permission_id",
    verify_token,
    validate(remove_permission_from_role_validation, "params"),
    require_permission("SYSTEM_MANAGE_ROLES"),
    remove_permission_from_role,
);

module.exports = router;
