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
const { permissions } = require("./permissions_data");
const { Role } = require("../models/Role");
const { roles } = require("./roles_data");

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
// Send roles
// =========================

const send_roles = async () => {
    try {
        const role_documents = [];

        for (const role of roles) {
            const permission_documents = await Permission.find({
                code: { $in: role.permission_codes },
            });

            const permission_map = new Map(
                permission_documents.map((permission) => [
                    permission.code,
                    permission._id,
                ]),
            );

            const missing_permissions = role.permission_codes.filter(
                (code) => !permission_map.has(code),
            );

            if (missing_permissions.length > 0) {
                throw new Error(
                    `Permissions not found for role ${role.name}: ${missing_permissions.join(", ")}`,
                );
            }

            const role_permissions = role.permission_codes.map((code) =>
                permission_map.get(code),
            );

            role_documents.push({
                _id: role._id,
                code: role.code,
                name: role.name,
                name_ar: role.name_ar,
                description: role.description,
                permissions: role_permissions,
                is_active: role.is_active,
            });
        }

        await Role.insertMany(role_documents);

        console.log("Roles inserted successfully.");
    } catch (error) {
        console.error("Error inserting roles:", error);

        throw error;
    }
};

// =========================
// Assign Super Admin Role
// =========================

const assign_super_admin_role = async () => {
    try {
        const super_admin_role = await Role.findOne({
            code: "SUPER_ADMIN",
        });

        if (!super_admin_role) {
            throw new Error("SUPER_ADMIN role not found.");
        }
        const result = await User.updateOne(
            { type: "ADMIN" },
            {
                $set: {
                    role_id: super_admin_role._id,
                },
            },
        );

        if (result.matchedCount === 0) {
            throw new Error("ADMIN user not found.");
        }
        console.log("SUPER_ADMIN role assigned successfully.");
    } catch (error) {
        console.error("Error assigning SUPER_ADMIN role:", error);
        throw error;
    }
};

// =========================
// Delete roles
// =========================

const delete_roles = async () => {
    try {
        await Role.deleteMany();

        console.log("Roles deleted successfully.");
    } catch (error) {
        console.error("Error deleting roles:", error);

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

            await send_roles();

            await assign_super_admin_role();

            console.log("Seeder completed successfully.");
        } else if (process.argv[2] === "-d") {
            await delete_roles();

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
