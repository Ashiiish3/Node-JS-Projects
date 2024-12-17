const express = require("express");
const { notesCreate, notesDelete, getSingleNote, getAllNotes } = require("../controllers/notes.controller");
const isAuth = require("../middleware/Auth");

const notesRouter = express.Router()

notesRouter.post("/create", isAuth, notesCreate)
notesRouter.delete("/delete/:notesId", isAuth, notesDelete)
notesRouter.get("/getAllNotes/:userId", isAuth, getAllNotes)
notesRouter.get("/getSingleNote/:noteId", isAuth, getSingleNote)
module.exports = notesRouter;