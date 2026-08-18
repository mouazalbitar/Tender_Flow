const axios = require("axios");

async function send_whatsapp_message(phone, message) {
    const url = `https://api.ultramsg.com/instance${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`;

    const response = await axios.post(
        url,
        new URLSearchParams({
            token: process.env.ULTRAMSG_TOKEN,
            to: phone,
            body: message,
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        },
    );

    return response.data;
}

module.exports = {
    send_whatsapp_message,
};
