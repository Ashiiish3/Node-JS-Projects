const express = require("express")
const { userSignUp, userSignIn } = require("../controllers/user.controller")

const userRouter = express.Router()

// Sing Up Router
userRouter.post("/signup", userSignUp)
// Sign in 
userRouter.post("/singin", userSignIn)

module.exports = userRouter