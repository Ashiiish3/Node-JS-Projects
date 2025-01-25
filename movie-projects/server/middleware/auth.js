const jwt = require("jsonwebtoken")
require('dotenv').config()

const isAuth = (req, res, next) => {
    const { AccessToken } = req.cookies
    if (!AccessToken) {
        return res.status(400).json({ message: "Please login first." })
    }
    jwt.verify(AccessToken, process.env.PRIVATEKEY, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: "Error verifying token", err })
        }
        if (decoded) {
            req.user = decoded.userData
        }
        next()
    })
}

module.exports = isAuth