const express = require("express")
const connectWithDb = require("./config/db")
const userRouter = require("./routes/user.routes")
const notesRouter = require("./routes/notes.routes")
const cookieParser = require('cookie-parser')
const cors = require("cors")
require('dotenv').config()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/note", notesRouter)
app.listen(process.env.PORT || 5000, async () => {
    try {
        await connectWithDb
        console.log(`Server is running on Port ${process.env.PORT || 5000}`)
    } catch (error) {
        console.log(error)
    }
})