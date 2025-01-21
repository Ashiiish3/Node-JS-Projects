const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;