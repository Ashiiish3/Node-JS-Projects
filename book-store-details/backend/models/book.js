const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    Image: String,
    Title: String,
    Author: String,
    Price: Number,
    Description: String,
    ISBN: String
})
const bookModel = mongoose.model("book", bookSchema)

module.exports =  bookModel