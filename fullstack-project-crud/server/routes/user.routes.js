const express = require("express")
const { userSignUp } = require("../controllers/user.controller")

const userRouter = express.Router()

// Sing Up Router
userRouter.post("/signup", userSignUp)

module.exports = userRouter