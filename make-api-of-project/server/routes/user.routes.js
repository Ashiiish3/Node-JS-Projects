const express = require("express")
const { userSignUp, userSignIn } = require("../controllers/user.controller")
const userRoutes = express.Router()

userRoutes.post("/signup", userSignUp)
userRoutes.post("/signin", userSignIn)

module.exports = userRoutes