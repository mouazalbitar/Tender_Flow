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
        cb(
            null,
            `${uniqueSuffix}${path.extname(file.originalname)}`,
        );
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
