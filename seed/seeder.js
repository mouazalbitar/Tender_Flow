const { User } = require("../models/User");
const { Organization } = require("../models/Organization");
const { Tender } = require("../models/Tender");
const { TenderAttachment } = require("../models/TenderAttachment");
const { users } = require("./user_data");
const { orgs } = require("./orgs_data");
const { tenders } = require("./tenders_data");
const { tender_attachments } = require("./tender_attachment_data");
const { Bid } = require("../models/Bid");
const { bids } = require("./bid_data");
const { Permission } = require("../models/Permission");
const {permissions} = require("./permissions_data");

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
// Send tenders
// =========================

const send_tenders = async () => {
    try {
        await Tender.insertMany(tenders);

        console.log("Tenders inserted successfully.");
    } catch (error) {
        console.error("Error inserting tenders:", error);

        throw error;
    }
};

// =========================
// Send attachments of tender
// =========================

const send_attachs = async () => {
    try {
        await TenderAttachment.insertMany(tender_attachments);

        console.log("Attachments of Tenders inserted successfully.");
    } catch (error) {
        console.error("Error inserting tenders:", error);

        throw error;
    }
};

// =========================
// Send bids
// =========================

const send_bids = async () => {
    try {
        await Bid.insertMany(bids);

        console.log("Bids inserted successfully.");
    } catch (error) {
        console.error("Error inserting bids:", error);

        throw error;
    }
};

// =========================
// Send permissions
// =========================

const send_permissions = async () => {
    try {
        await Permission.insertMany(permissions);

        console.log("Permissions inserted successfully.");
    } catch (error) {
        console.error("Error inserting permissions:", error);

        throw error;
    }
};

// =========================
// Delete permissions
// =========================

const delete_permissions = async () => {
    try {
        await Permission.deleteMany();

        console.log("Permissions deleted successfully.");
    } catch (error) {
        console.error("Error deleting permissions:", error);

        throw error;
    }
};

// =========================
// Delete bids
// =========================

const delete_bids = async () => {
    try {
        await Bid.deleteMany();

        console.log("Bids deleted successfully.");
    } catch (error) {
        console.error("Error deleting bids:", error);

        throw error;
    }
};

// =========================
// Delete attachments of tender
// =========================

const delete_attachs = async () => {
    try {
        await TenderAttachment.deleteMany();

        console.log("Attachments of Tenders deleted successfully.");
    } catch (error) {
        console.error("Error inserting tenders:", error);

        throw error;
    }
};

// =========================
// Delete tenders
// =========================

const delete_tenders = async () => {
    try {
        await Tender.deleteMany();

        console.log("Tenders deleted successfully.");
    } catch (error) {
        console.error("Error deleting tenders:", error);

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

            // Tender third
            await send_tenders();

            // Attachments of Tender
            await send_attachs();

            // Bids
            await send_bids();

             await send_permissions();

            console.log("Seeder completed successfully.");
        } else if (process.argv[2] === "-d") {

             await delete_permissions();
            // Bids first
            await delete_bids();

            // Attachments of Tender
            await delete_attachs();

            // Tender second
            await delete_tenders();

            // User third
            await delete_users();

            // Organization
            await delete_orgs();

            console.log("Seeder deletion completed successfully.");
        } else {
            console.log("Invalid command. Use -s to send or -d to delete.");
        }

        process.exit(0);
    } catch (error) {
        console.error("Seeder failed:", error);

        process.exit(1);
    }
};

runSeeder();
