function authorizeRoles(...allowedRoles) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({
                message: "from role midlleware, Authentication required.",
                data: null,
                status: 401,
            });
        }

        if (!allowedRoles.includes(req.user.type)) {
            return res.status(403).json({
                message: "You don\'t have the role, Access denied.",
                data: null,
                status: 403,
            });
        }

        next();
    };
}

module.exports = { authorizeRoles };
