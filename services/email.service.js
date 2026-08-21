const transporter = require("../config/mail");

const sendAccountApprovalEmail = async (user) => {
    await transporter.sendMail({
        from: process.env.GMAIL,
        to: user.email,
        subject: "Your account has been approved",
        text: `Hello ${user.f_name},

Your account has been approved successfully.

You can now log in to the system using your username and password.

Best regards,
Tender Flow`,
    });
};

module.exports = {
    sendAccountApprovalEmail,
};