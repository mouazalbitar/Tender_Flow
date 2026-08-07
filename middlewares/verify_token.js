const jwt = require("jsonwebtoken");

function verify_token(req, res, next) {
    const token = req.header.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            console.error("Error verifying token:", error);
            return res.status(401).json({
                message: "Invalid token.",
                data: null,
                status: 401,
            });
        }
    } else {
        return res.status(40).json({
            message: "required valid token.",
            data: null,
            status: 401,
        });
    }
}

module.exports = { verify_token };
