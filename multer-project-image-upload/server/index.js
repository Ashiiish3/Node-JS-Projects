const express = require("express")
const cors = require("cors")
require('dotenv').config()
const connection = require("./config/db")
const multerRouter = require("./routes/multer.route")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./UploadImages"))

app.use("/photo", multerRouter)

app.listen(process.env.PORT || 3000, async ()=>{
    try {
        await connection;
        console.log(`server is running on port ${process.env.PORT || 3000}`)
    } catch (error) {
        console.log(error)
    }
})