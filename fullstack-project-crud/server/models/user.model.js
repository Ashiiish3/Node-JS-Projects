const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email is Required."],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
        maxlength: [15, "Password cannot exceed 15 characters"]
    },
    role: {
        type: String,
        default: "user"
    }
},{
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;