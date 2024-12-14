const express = require("express");
const { notesCreate } = require("../controllers/notes.controller");

const notesRouter = express.Router()

notesRouter.post("/create", notesCreate)

module.exports = notesRouter;