const express = require("express");
const { notesCreate, notesDelete, getSingleNote, getAllNotes, updateNotes, getAllNotesByAdmin, deleteNotesbyAdmin } = require("../controllers/notes.controller");
const isAuth = require("../middleware/Auth");
const upload = require("../config/multer");
const isAdmin = require("../middleware/Admin");

const notesRouter = express.Router()

notesRouter.post("/create", isAuth, notesCreate)
notesRouter.delete("/delete/:notesId", isAuth, notesDelete)
notesRouter.get("/getAllNotes/:userId", isAuth, getAllNotes)
notesRouter.get("/getSingleNote/:noteId", isAuth, getSingleNote)
notesRouter.patch("/updateNotes/:noteId", isAuth, upload.single("file"), updateNotes)
// Route for Admin
notesRouter.get("/getAllNotesAdmin", isAuth, isAdmin, getAllNotesByAdmin)
notesRouter.delete("/deleteNotesAdmin", isAuth, isAdmin, deleteNotesbyAdmin)

module.exports = notesRouter;