const cron = require("node-cron");
const startTenderStatusJob = () => {
    cron.schedule("0 */3 * * *", async () => {
        console.log("Tender status job running...");
    });
};

module.exports = {
    startTenderStatusJob,
};
