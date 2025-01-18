const express = require("express")
const { connectWithDB } = require("./utils/db")
require('dotenv').config()

const app = express()

app.listen(process.env.PORT || 5000, async ()=>{
    try {
        await connectWithDB
        console.log(`server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log("Error Create server",error)
    }
})