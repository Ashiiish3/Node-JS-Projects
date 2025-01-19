const userModel = require("../models/user.model")

const userRegister = async (req, res) => {
    res.send("ok")
    const { email, name, password } = req.body
    // if (!name || !email || !password) {
    //     return res.status(200).json({ message: "Please fill all Fields." })
    // }
    // try {
    //     const isUserExist = await userModel.find({ email })
    //     return console.log(isUserExist)
    // } catch (error) {
    //     return res.status(400).json({ message: "error while register." })
    // }
}
const userLogin = async (req, res) => {

}

module.exports = { userRegister, userLogin }