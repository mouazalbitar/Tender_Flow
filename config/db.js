const mongoose = require("mongoose");

function connectToDB() {
    try {
        mongoose.connect(process.env.MONGOOSEDB);
        console.log("connected to database.");
    } catch (err) {
        console.error("failed to connect to database,", err);
    }
}

module.exports = { connectToDB };
