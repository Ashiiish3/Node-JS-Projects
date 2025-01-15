const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator')
require('dotenv').config()

const createOTPandToken = (userInfo) => {
    const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    const token = jwt.sign({ OTP, user: userInfo }, process.env.SecretKey);
    return {OTP, token}
}

module.exports = createOTPandToken