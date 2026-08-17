const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/tenders/attachments/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix =
            new Date().toISOString().replace(/:/g, "-") +
            "-" +
            Math.round(Math.random() * 1e9);

        cb(
            null,
            `tender-attachment-${uniqueSuffix}${path.extname(
                file.originalname,
            )}`,
        );
    },
});
const upload_tender_attachment = multer({
    storage: storage,
    limits: {
        fileSize: 40 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDF files are allowed."));
        }

        cb(null, true);
    },
});

module.exports = { upload_tender_attachment };
