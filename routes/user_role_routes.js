const express = require("express");
const { assign_role } = require("../controllers/user_role_controller");
const {
    assign_role_validation,
    user_id_validation,
} = require("../validators/user_role_validation");
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

router.patch(
    "/:id/role",
    verify_token,
    require_permission("USER_ASSIGN_ROLE"),
    validate(user_id_validation, "params"),
    validate(assign_role_validation, "body"),
    assign_role,
);

module.exports = router;
