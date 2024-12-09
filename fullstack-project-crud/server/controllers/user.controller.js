const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');

const userSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (req.body.role) {
        return res.status(400).send({ message: "Role can not be sent from req.body." })
    }
    if (!name || !email || !password) {
        return res.status(400).send({ message: "Please fill in all fields." })
    }
    try {
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(400).send({ message: "Email already exist." })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(500).send({ message: "Error in hasing Password." })
            }
            await userModel.create({ name, email, hash })
            res.status(200).send({ message: "Account has been created." })
        });
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

const userSignIn = (req, res) => {

}

module.exports = { userSignUp, userSignIn }