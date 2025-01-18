const mongoose = require("mongoose");
require('dotenv').config()

const connectWithDB = mongoose.connect(process.env.MONGODB_URL)

module.exports = connectWithDB;