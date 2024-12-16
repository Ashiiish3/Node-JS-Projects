const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

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
            await userModel.create({ name, email, password: hash })
            res.status(200).send({ message: "Account has been created." })
        });
    } catch (error) {
        res.status(400).send({ message: "Error creating Sing Up", error })
    }
}

const userSignIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: "Please fill in all fields." })
    }
    try {
        const isUserExist = await userModel.findOne({ email })
        if (!isUserExist) {
            return res.status(404).send({ message: "Please Sign up first." })
        }
        bcrypt.compare(password, isUserExist.password, (err, result) => {
            if(err){
                res.status(500).json({message: "Error is comparing Password."})
            }
            if(!result){
                return res.status(401).send({message: "Password is incorrect."})
            }
            if(result){
                // Creating token
                const token = jwt.sign({userId: isUserExist._id}, process.env.SecretKey, { expiresIn: "2 days"} )
                console.log(token)
                res.cookie("AccessToken",token).status(200).json({message: "Login Successfully."})
            }
        });
    } catch (error) {
        res.status(500).send({ message: "Error creating Sing Up", error })
    }
}

module.exports = { userSignUp, userSignIn }