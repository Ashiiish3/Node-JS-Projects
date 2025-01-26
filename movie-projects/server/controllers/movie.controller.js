const movieModel = require("../models/movie.model")

const createMovie = async (req, res) => {
    const { title, genre, director, releaseYear, description } = req.body
    if (!title || !genre || !director || !releaseYear || !description) {
        res.status(500).json({ message: "Please fill all fields." })
    }
    try {
        if (req.file) {
            await movieModel.create({ title, genre, director, releaseYear, description, image: req?.file?.filename, userId: req.user._id, name: req.user.name })
            res.status(200).json({ message: "Movie has been created successfully." })
        } else {
            await movieModel.create({ title, genre, director, releaseYear, description, userId: req.user._id, name: req.user.name })
            res.status(200).json({ message: "Movie has been created successfully." })
        }
    } catch (error) {
        res.status(400).json({ message: "error creating movies", error })
    }
}
const getAllMovies = async (req, res) => {
    const { userId } = req.params
    if (!userId) {
        res.status(500).json({ message: "userId is not find." })
    }
    try {
        if (userId !== req.user._id) {
            return res.status(400).json({ message: "You don't have permission to see movies." })
        }
        const movies = await movieModel.find({ userId })
        if (movies.length === 0) {
            return res.status(400).json({ message: "No movies Found." })
        }
        res.status(200).json({ movies })
    } catch (error) {
        res.status(400).json({ message: "error getting all movies", error })
    }
}
const getSingleMovie = async (req, res) => {
    const { movieId } = req.params
    if (!movieId) {
        return res.status(400).json({ message: "movieId is required." })
    }
    try {
        const movie = await movieModel.findById(movieId)
        if (!movie) {
            return res.status(400).json({ message: "Movie is not found." })
        }
        if (movie.userId != req.user._id) {
            return res.status(400).json({ message: "You don't have permission to get this movie." })
        }
        res.status(200).json({ movie })
    } catch (error) {
        return res.status(400).json({ message: "error getting a movie", error })
    }
}
const updateMovie = async (req, res) => {
    const { title, genre, director, releaseYear, description } = req.body
    const { movieId } = req.params
    if (!movieId) {
        return res.status(500).json({ message: "movieId is not found." })
    }
    try {
        const movie = await movieModel.findById(movieId)
        if (!movie) {
            return res.status(400).json({ message: "Movie not Exist." })
        }
        if (movie.userId !== req.user._id) {
            return res.status(400).json({ message: "You don't have permission to get this Movie." })
        }
        if (req.file) {
            const updatedMovie = await movieModel.findByIdAndUpdate(movieId, { title, genre, director, releaseYear, description, image: req?.file?.filename }, { new: true })
            res.status(200).json({ message: "Movie has been updated.", Movie: updatedMovie })
        } else {
            const updatedMovie = await movieModel.findByIdAndUpdate(movieId, { title, genre, director, releaseYear, description }, { new: true })
            res.status(200).json({ message: "Movie has been updated.", Movie: updatedMovie })
        }
    } catch (error) {
        return res.status(400).json({ message: "error while updating movie", error })
    }
}
const deleteMovie = async (req, res) => {
    const { movieId } = req.params
    if (!movieId) {
        return res.status(400).json({ message: "movieId is not found." })
    }
    try {
        const movie = await movieModel.findById(movieId)
        if (!movie) {
            return res.status(400).json({ message: "Movie not Exist." })
        }
        if (movie.userId !== req.user._id) {
            return res.status(400).json({ message: "You don't have permission to get this Movie." })
        }
        await movieModel.findByIdAndDelete(movieId)
        res.status(200).json({ message: "Movie has been deleted." })
    } catch (error) {
        return res.status(400).json({ message: "error while deleting movie", error })
    }
}

module.exports = { createMovie, getAllMovies, getSingleMovie, updateMovie, deleteMovie }