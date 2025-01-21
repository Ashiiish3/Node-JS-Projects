const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).json({ message: "error while bcrypting password", err })
            }
            await userModel.create({ name, email, password: hash })
            res.status(200).json({ message: "Account has been created succefully." })
        })
    } catch (error) {
        return res.status(400).json({ message: "error while register." })
    }
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
                jwt.sign({ userData: rest }, process.env.PRIVATEKEY,{ expiresIn: "1h" }, (err, token) => {
                    if (err) {
                        res.status(400).json({ message: "error while creating token", err })
                    }
                    if (token) {
                        res.cookie("AccessToken", token).status(200).json({ message: "Login Successfully", userData: user, token })
                    }
                })
            }
        })
    } catch (error) {
        return res.status(400).json({ message: "error while login." })
    }
}

module.exports = { userRegister, userLogin }