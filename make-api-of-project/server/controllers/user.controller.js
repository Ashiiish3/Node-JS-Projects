const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');

const userSignUp = async (req, res) => {
    const { userName, email, dateOfBirth, role, location, password, confirmPassword } = req.body
    if (!userName || !email || !dateOfBirth || !role || !location || !password || !confirmPassword) {
        return res.status(400).json({ message: "Please fill all fields." })
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password is not match." })
    }
    try {
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(400).json({ message: "User is already Exist." })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).send({ message: "Error in hasing Password." })
            }
            await userModel.create({ userName, email, dateOfBirth, role, location, password: hash })
            res.status(200).json({ message: "Account has been created succefully." })
        })
    } catch (error) {
        res.status(400).send({ message: "Error creating Sing Up", error })
    }
}
const userSignIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status().json({ message: "Please fill All fields." })
    }
    try {
        const isUserExist = await userModel.findOne({ email })
        if (!isUserExist) {
            return res.status().json({ message: "Please sign up first." })
        }
        bcrypt.compare(password, isUserExist.password, async (err, result) => {
            if (err) {
                res.status(500).json({ message: "Error is comparing Password." })
            }
            if (result) {
                res.status(200).json({ message: "Login Successfully.", userData: isUserExist })
            }
        })
    } catch (error) {
        res.status(400).send({ message: "Error creating Sing Ip", error })
    }

}

module.exports = { userSignUp, userSignIn }