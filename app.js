const express = require("express");
const app = express();
const { connectToDB } = require("./config/db");
const { not_found, error_handler } = require("./middlewares/errors");
const logger = require("./middlewares/logger");
const path = require("path"); // for welcome page
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// connect to database
connectToDB();

// apply middlewares
app.use(express.json());
app.use(logger);

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/orgs", require("./routes/orgs"));

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
