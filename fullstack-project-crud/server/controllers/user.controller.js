const userModel = require("../models/user.model");

const userSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (req.body.role) {
        return res.status(400).send({ message: "Role can not be sent from req.body." })
    }
    if(!name || !email || !password){
        return res.status(400).send({message: "Please fill in all fields."})
    }
    try {
        const isUserExist = await userModel.findOne({email})
        if(isUserExist){
            return res.status(400).send({message: "Email already exist."})
        }
    } catch (error) {
        res.status(400).send({message: error})
    }
    console.log(req)
    res.send("Ok")
}

module.exports = { userSignUp }