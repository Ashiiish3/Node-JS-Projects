const express = require("express")

const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const bookSchema = new mongoose.Schema({
    Title: String,
    Author: String,
    Price: Number,
    Description: String,
    ISBN: String
})
const bookModel = mongoose.model("book", bookSchema)

const connectToMongoose = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}
connectToMongoose()

app.get('/books', (req, res)=>{
    console.log("data got.")
    res.send("data got")
})
app.post('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been added")
})
app.put('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been updated")
})
app.delete('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been deleted.")
})
app.listen(2525, ()=>{
    console.log("Server is running on port 2525")
})