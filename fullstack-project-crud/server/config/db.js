const mongoose = require("mongoose")

const connectWithDb = mongoose.connect("mongodb://127.0.0.1:27017/fullStackCrud")

module.exports = connectWithDb;