const express = require("express")
const { connectWithDB } = require("./utils/db")
const userRoutes = require("./routes/user.routes")
const cookieParser = require('cookie-parser')
const movieRoutes = require("./routes/movie.routes")
const cors = require("cors")
require('dotenv').config()

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(cookieParser())
app.use(express.static("./uploads"));
app.use(cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173", "http://localhost:4000", "http://localhost:5000"],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use("/auth", userRoutes)
app.use("/movie", movieRoutes)

app.listen(process.env.PORT || 5000, async () => {
    try {
        await connectWithDB
        console.log(`server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log("Error Create server", error)
    }
})