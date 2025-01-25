const express = require("express");
const { createMovie, getAllMovies, updateMovie, deleteMovie } = require("../controllers/movie.controller");
const isAuth = require("../middleware/auth");
const movieRoutes = express.Router()

movieRoutes.post("/createmovie", isAuth, createMovie)
movieRoutes.get("/allmovies/:userId", isAuth, getAllMovies)
movieRoutes.put("/updatemovie/:movieId", isAuth, updateMovie)
movieRoutes.delete("/deletemovie/:movieId", isAuth, deleteMovie)

module.exports = movieRoutes;