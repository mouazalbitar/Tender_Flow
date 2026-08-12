const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/executor/id_cards/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix =
            new Date().toISOString().replace(/:/g, "-") +
            "-" +
            Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

const upload_id_cards = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only JPEG, JPG and PNG images are allowed."));
        }

        cb(null, true);
    },
});

module.exports = upload_id_cards;
