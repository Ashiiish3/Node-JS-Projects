const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: "ashiiish777@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendEmail = async (mailId, htmlTemplate) => {
    try {
        const info = await transporter.sendMail({
            from: "ashiiish777@gmail.com",
            to: mailId,
            subject: "Verification Number",
            html: htmlTemplate
        })
        if(info){
            console.log("Email sent successfully.", info)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendEmail