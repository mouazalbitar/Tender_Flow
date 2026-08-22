const cron = require("node-cron");
const { Tender } = require("../models/Tender");

const startTenderStatusJob = () => {
    cron.schedule("* * * * *", async () => {
        console.log("Tender status job is running...");
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            await Tender.updateMany(
                {
                    status: "PUBLISHED",
                    submission_start: {
                        $lte: today,
                    },
                },
                {
                    $set: {
                        status: "OPEN",
                    },
                },
            );
            await Tender.updateMany(
                {
                    status: "OPEN",
                    submission_deadline: {
                        $lte: today,
                    },
                },
                {
                    $set: {
                        status: "CLOSED",
                    },
                },
            );
            console.log("Tender statuses updated successfully.");
        } catch (error) {
            console.error("Error updating tender statuses:", error);
        }
    });
};

module.exports = {
    startTenderStatusJob,
};
