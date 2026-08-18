const crypto = require("crypto");

function generate_otp() {
    return crypto.randomInt(100000, 1000000).toString();
}

function hash_otp(otp) {
    return crypto.createHash("sha256").update(otp).digest("hex");
}

module.exports = {
    generate_otp,
    hash_otp,
};
