const crypto = require("crypto");

function generate_reset_token() {
    return crypto.randomBytes(32).toString("hex");
}

function hash_reset_token(token) {
    return crypto.createHash("sha256").update(token).digest("hex");
}

module.exports = {
    generate_reset_token,
    hash_reset_token,
};
