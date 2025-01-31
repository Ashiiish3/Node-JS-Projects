const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
    port: 587,
    service: "gmail",
    auth: {
        user: "Ashiiish777@gmail.com",
        pass: process.env.PASSWORD,
    },
});

async function SendEmail(userEmailId, HTMLTemplate) {
    const info = await transporter.sendMail({
        from: 'Ashiiish777@gmail.com',
        to: userEmailId,
        subject: "Verificate OTP ✔",
        html: HTMLTemplate,
    });

    return info
}

module.exports = SendEmail;