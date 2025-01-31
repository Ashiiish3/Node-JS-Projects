const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator')
require('dotenv').config()

const CreateOTPandToken = (userInfo) => {
    const OTP = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    const token = jwt.sign({ OTP, user: userInfo }, process.env.PRIVATEKEY)
    return { OTP, verificationToken: token }
}

module.exports = CreateOTPandToken;