const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
    filename: String
})

const fileModel = mongoose.model("image", fileSchema)
module.exports = fileModel;