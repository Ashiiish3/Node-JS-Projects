const mongoose = require("mongoose")

const connectToMongoose = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectToMongoose;