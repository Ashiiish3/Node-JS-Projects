const express = require("express");
const { notesCreate, notesDelete, getSingleNote, getAllNotes, updateNotes } = require("../controllers/notes.controller");
const isAuth = require("../middleware/Auth");
const upload = require("../config/multer");

const notesRouter = express.Router()

notesRouter.post("/create", isAuth, notesCreate)
notesRouter.delete("/delete/:notesId", isAuth, notesDelete)
notesRouter.get("/getAllNotes/:userId", isAuth, getAllNotes)
notesRouter.get("/getSingleNote/:noteId", isAuth, getSingleNote)
notesRouter.patch("/updateNotes:noteId", isAuth, upload.single("file"), updateNotes)
module.exports = notesRouter;