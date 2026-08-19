const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/executor/bids/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix =
            new Date().toISOString().replace(/:/g, "-") +
            "-" +
            Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

const upload_bid = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024, // 10 MB
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["application/pdf"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only PDF files are allowed."));
        }
        cb(null, true);
    },
});

module.exports = upload_bid;