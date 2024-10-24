const express = require("express")
const connectToMongoose = require("./database")
const userRouter = require("./routes/bookRoutes")
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.use('/product', userRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    connectToMongoose()
    console.log(`Server is running on port ${PORT}`)
})