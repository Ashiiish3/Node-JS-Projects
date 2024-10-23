const mongoose = require('mongoose')

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

module.exports = { connectToMongoose, bookModel }