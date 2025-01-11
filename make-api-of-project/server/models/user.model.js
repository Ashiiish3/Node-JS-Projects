const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    dateOfBirth: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    location: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;