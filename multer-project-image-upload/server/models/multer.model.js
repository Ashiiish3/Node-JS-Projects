const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: String
})

const fileModel = mongoose.model("image", fileSchema)
module.exports = fileModel;