const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "front" || file.fieldname === "back") {
            cb(null, "uploads/executor/id_cards/");
        } else if (file.fieldname === "logo") {
            cb(null, "uploads/organizations/logos/");
        } else if (file.fieldname === "commercial_register") {
            cb(null, "uploads/organizations/commercial_register/");
        } else if (file.fieldname === "license") {
            cb(null, "uploads/organizations/licenses/");
        } else {
            cb(new Error("Invalid file field."));
        }
    },

    filename: (req, file, cb) => {
        const uniqueSuffix =
            new Date().toISOString().replace(/:/g, "-") +
            "-" +
            Math.round(Math.random() * 1e9);
        cb(
            null,
            `${file.fieldname}-${uniqueSuffix}${path.extname(
                file.originalname,
            )}`,
        );
    },
});

const uploadRegistration = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Only JPEG, JPG and PNG images are allowed."));
        }
        cb(null, true);
    },
});

module.exports = uploadRegistration;
