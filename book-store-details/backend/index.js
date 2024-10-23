const express = require("express")
const { connectToMongoose } = require("./models/book")
const userRouter = require("./controllers/bookController")
const app = express()
app.use(express.json())

app.use('/product', userRouter)

app.listen(2525, ()=>{
    connectToMongoose()
    console.log("Server is running on port 2525")
})