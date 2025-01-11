const express = require("express")
const connectWithDb = require("./config/db")
const userRoutes = require("./routes/user.routes")
require('dotenv').config()

const app = express()
app.use(express.json())

app.use("/user", userRoutes)

app.listen(process.env.PORT, async () => {
    try {
        await connectWithDb
        console.log(`Server is running on ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})