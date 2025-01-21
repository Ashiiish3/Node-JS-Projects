const express = require("express")
const { connectWithDB } = require("./utils/db")
const userRoutes = require("./routes/user.routes")
const cookieParser = require('cookie-parser')
const movieRoutes = require("./routes/movie.routes")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/auth", userRoutes)
app.use("/movie", movieRoutes)

app.listen(process.env.PORT || 5000, async ()=>{
    try {
        await connectWithDB
        console.log(`server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log("Error Create server",error)
    }
})