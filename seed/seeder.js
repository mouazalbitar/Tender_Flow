// const { User } = require("../models/User");
// const { Organization } = require("../models/Organization");
// const { users } = require("./user_data");
// const { orgs } = require("./orgs_data");
// const { connectToDB } = require("../config/db");
// require("dotenv").config();

// // connecting to database
// connectToDB();

// // send users to database
// const send_users = async () => {
//     try {
//         await User.insertMany(users);
//         console.log("users inserted successfully.");
//     } catch (error) {
//         console.error("Error inserting users:", error);
//         process.exit(1); // cut connection with database
//     }
// };

// // send orgs to database
// const send_orgs = async () => {
//     try {
//         await Organization.insertMany(orgs);
//         console.log("orgs inserted successfully.");
//         process.exit(0);
//     } catch (error) {
//         console.error("Error inserting users:", error);
//         process.exit(1); // cut connection with database
//     }
// };

// // delete all users from database
// const delete_users = async () => {
//     try {
//         await User.deleteMany();
//         console.log("users deleted successfully.");
//     } catch (error) {
//         console.error("Error deleting users:", error);
//         process.exit(1);
//     }
// };

// // delete all orgs from database
// const delete_orgs = async () => {
//     try {
//         await Organization.deleteMany();
//         console.log("orgs deleted successfully.");
//         process.exit(0);
//     } catch (error) {
//         console.error("Error deleting users:", error);
//         process.exit(1);
//     }
// };

// // node seed/seeder -d | node seed/seeder -s OR with npm run seed:delete | npm run seed:send
// if (process.argv[2] === "-s") { // من الأصل للفرع
//     send_orgs();
//     send_users();
// } else if (process.argv[2] === "-d") { // من الفرع للأصل
//     delete_users();
//     delete_orgs();
// } else {
//     console.log("something went wrong from seeder file.");
// }

const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { users } = require("./user_data");
const { orgs } = require("./orgs_data");
const { connectToDB } = require("../config/db");

require("dotenv").config();


// =========================
// Send organizations
// =========================

const send_orgs = async () => {
    try {
        await Organization.insertMany(orgs);

        console.log("Organizations inserted successfully.");
    } catch (error) {
        console.error("Error inserting organizations:", error);

        throw error;
    }
};


// =========================
// Send users
// =========================

const send_users = async () => {
    try {
        await User.insertMany(users);

        console.log("Users inserted successfully.");
    } catch (error) {
        console.error("Error inserting users:", error);

        throw error;
    }
};


// =========================
// Delete users
// =========================

const delete_users = async () => {
    try {
        await User.deleteMany();

        console.log("Users deleted successfully.");
    } catch (error) {
        console.error("Error deleting users:", error);

        throw error;
    }
};


// =========================
// Delete organizations
// =========================

const delete_orgs = async () => {
    try {
        await Organization.deleteMany();

        console.log("Organizations deleted successfully.");
    } catch (error) {
        console.error("Error deleting organizations:", error);

        throw error;
    }
};


// =========================
// Seeder
// =========================

const runSeeder = async () => {
    try {
        await connectToDB();

        if (process.argv[2] === "-s") {

            // Organization first
            await send_orgs();

            // User second
            await send_users();

            console.log("Seeder completed successfully.");

        } else if (process.argv[2] === "-d") {

            // User first
            await delete_users();

            // Organization second
            await delete_orgs();

            console.log("Seeder deletion completed successfully.");

        } else {

            console.log(
                "Invalid command. Use -s to send or -d to delete.",
            );
        }

        process.exit(0);

    } catch (error) {

        console.error("Seeder failed:", error);

        process.exit(1);
    }
};


runSeeder();