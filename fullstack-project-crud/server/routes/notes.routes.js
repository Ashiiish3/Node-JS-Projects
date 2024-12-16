const express = require("express");
const { notesCreate } = require("../controllers/notes.controller");
const isAuth = require("../middleware/Auth");

const notesRouter = express.Router()

notesRouter.post("/create", isAuth, notesCreate)

module.exports = notesRouter;