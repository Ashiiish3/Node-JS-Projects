const express = require("express")
const connectWithDb = require("./config/db")
const userRouter = require("./routes/user.routes")
require('dotenv').config()

const app = express()
app.use(express.json())

app.use("/user", userRouter)
app.listen(process.env.PORT || 4000, async () => {
    try {
        await connectWithDb
        console.log(`Server is running on Port ${process.env.PORT || 4000}`)
    } catch (error) {
        console.log(error)
    }
})