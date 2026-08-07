const { User } = require("../models/user");
const { users } = require("./user_data");
const { connectToDB } = require("../config/db");
require("dotenv").config();

// connecting to database
connectToDB();

const send_users = async () => {
    try {
        await User.insertMany(users);
        console.log("users inserted successfully.");
        process.exit(0);
    } catch (error) {
        console.error("Error inserting users:", error);
        process.exit(1); // cut connection with database
    }
};

const delete_users = async () => {
    try {
        await User.deleteMany();
        console.log("users deleted successfully.");
        process.exit(0);
    } catch (error) {
        console.error("Error deleting users:", error);
        process.exit(1);
    }
};

// node seed/seeder -d | node seed/seeder -s OR with npm run seed:delete | npm run seed:send
if (process.argv[2] === "-s") {
    send_users();
} else if (process.argv[2] === "-d") {
    delete_users();
} else {
    console.log("something went wrong from seeder file.");
}
