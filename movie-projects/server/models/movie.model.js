const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    genre: {
        type: String,
        enum: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller"]
    },
    director: String,
    releaseYear: Number,
    description: String,
    userId: String
}, {
    timestamps: true,
    versionKey: false
})

const movieModel = mongoose.model("movie", movieSchema)

module.exports = movieModel;