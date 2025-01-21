const express = require("express");
const { getAllMovies, createMovie, updateMovie, deleteMovie } = require("../controllers/movie.controller");
const movieRoutes = express.Router()

movieRoutes.get("/allmovies", getAllMovies)
movieRoutes.post("/createmovie", createMovie)
movieRoutes.put("/updatemovie", updateMovie)
movieRoutes.delete("/deletemovie", deleteMovie)

module.exports = movieRoutes;