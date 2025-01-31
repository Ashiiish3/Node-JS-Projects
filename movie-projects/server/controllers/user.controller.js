const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CreateOTPandToken = require("../utils/otp");
const ejs = require("ejs");
const SendEmail = require("../utils/email");
require('dotenv').config()


const userRegister = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(200).json({ message: "Please fill all Fields." })
    }
    try {
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(400).json({ message: "User is already Exist." })
        }
        const { OTP, verificationToken } = CreateOTPandToken(req.body)
        const HTMLTemplate = await ejs.renderFile(__dirname + '/../views/Email.ejs', { OTP, name })
        const response = await SendEmail(email, HTMLTemplate)
        if (response) {
            return res.cookie("verificationToken", verificationToken).status(200).json({ message: "Email has been sent successfully." })
        } else {
            return res.status(200).json({ message: "Eamil has not been sent." })
        }
    } catch (error) {
        return res.status(400).json({ message: error?.message || "error while register." })
    }
}

const verifyOTP = async (req, res) => {
    const { otp } = req.body;
    const { verificationToken } = req.cookies;
    if (!otp) {
        return res.status(400).json({ message: "OTP is required." })
    }
    if (!verificationToken) {
        return res.status(400).json({ message: "Token is not found." })
    }
    jwt.verify(verificationToken, process.env.PRIVATEKEY, async (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: "token is not verified." })
        }
        if (decoded) {
            const { OTP, user } = decoded
            if (OTP !== otp) {
                return res.status(400).json({ message: "Invalid OTP" })
            }
            bcrypt.hash(user.password, 5, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: "error while bcrypting password", err })
                }
                await userModel.create({ ...user, password: hash })
                res.status(200).json({ message: "Account has been created succefully." })
            })
        } else {
            return res.status(400).json({ message: "Token is invalid." })
        }
    })

}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(200).json({ message: "Please fill all Fields." })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(500).json({ message: "User does not Exist. Please register first." })
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(400).json({ message: "error while comparing password." })
            }
            if (result) {
                const { password, ...rest } = user._doc
                jwt.sign({ userData: rest }, process.env.PRIVATEKEY, { expiresIn: "1h" }, (err, token) => {
                    if (err) {
                        res.status(400).json({ message: "error while creating token", err })
                    }
                    if (token) {
                        res.cookie("AccessToken", token).status(200).json({ message: "Login Successfully", userData: user, token })
                    }
                })
            } else {
                return res.status(401).send({ message: "Password is incorrect." })
            }
        })
    } catch (error) {
        return res.status(400).json({ message: "error while login." })
    }
}

module.exports = { userRegister, userLogin, verifyOTP }