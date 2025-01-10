const mongoose = require("mongoose");
require('dotenv').config()

const connectWithDb = mongoose.connect(process.env.MONGODB_URL)

module.exports = connectWithDb;