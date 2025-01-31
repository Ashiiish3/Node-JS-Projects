const express = require("express")
const { userRegister, userLogin, verifyOTP } = require("../controllers/user.controller")
const userRoutes = express.Router()

userRoutes.post("/register", userRegister)
userRoutes.post("/verifyotp", verifyOTP)
userRoutes.post("/login", userLogin)

module.exports = userRoutes