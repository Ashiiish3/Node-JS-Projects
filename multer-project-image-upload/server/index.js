const express = require("express")
const connection = require("./config/db")
require('dotenv').config()

const app = express()
app.use(express.json())

app.listen(process.env.PORT || 3000, async ()=>{
    try {
        await connection;
        console.log(`server is running on port ${process.env.PORT || 3000}`)
    } catch (error) {
        console.log(error)
    }
})