const jwt = require("jsonwebtoken");

function verify_token(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "No Token, Authentication required.",
                data: null,
                status: 401,
            });
        }

        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            return res.status(401).json({
                message: "Invalid authorization format.",
                data: null,
                status: 401,
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token.",
            data: null,
            status: 401,
        });
    }
}

module.exports = { verify_token };
