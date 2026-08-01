const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { not_found, error_handler } = require("./middlewares/errors");
const logger = require("./middlewares/logger");
const path = require("path"); // for welcome page
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// connect to database
try {
    mongoose.connect(process.env.MONGOOSEDB);
    console.log("connected to database.");
} catch (err) {
    console.error("failed to connect to database,", err);
}

// apply middlewares
app.use(express.json());
app.use(logger);

// السماح بقراءة الملفات الثابتة مثل الصور الموجودة في المجلد محدد
app.use(express.static("welcome_page"));

// routes

app.use("/api/upload", require("./routes/upload"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./welcome_page/welcome.html"));
});
app.use(not_found);
app.use(error_handler);

// run server
app.listen(process.env.PORT, () => {
    console.log(
        `server is running now in ${process.env.NODE_ENV} mode on http://127.0.0.1:${process.env.PORT}`,
    );
});
