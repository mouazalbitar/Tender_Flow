const express = require("express");
const {
    get_permissions,
    get_permission_by_id,
} = require("../controllers/permission_controller");
const {
    get_permissions_validation,
    get_permission_validation,
} = require("../validators/permission_validation");
const { require_permission } = require("../middlewares/permission_middleware");
const { verify_token } = require("../middlewares/verify_token");
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
    require_permission("SYSTEM_MANAGE_PERMISSIONS"),
    validate(get_permissions_validation, "query"),
    get_permissions,
);
router.get(
    "/:id",
    verify_token,
    require_permission("SYSTEM_MANAGE_PERMISSIONS"),
    validate(get_permission_validation, "params"),
    get_permission_by_id,
);

module.exports = router;
