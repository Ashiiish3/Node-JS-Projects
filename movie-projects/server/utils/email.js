const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
    port: 587,
    auth: {
        user: "Ashiiish777@gmail.com",
        pass: process.env.PASSWORD,
    },
});

async function sendEmail(EmailId, HTMLTemplate) {
    const info = await transporter.sendMail({
        from: 'Ashiiish777@gmail.com',
        to: EmailId,
        subject: "Verificate OTP ✔",
        html: HTMLTemplate,
    });

    return info
}

module.exports = sendEmail;