const express = require("express");
const { uploadPhoto } = require("../controllers/multer.controller");
const upload = require("../config/multer");

const multerRouter = express.Router()

multerRouter.post("/upload", upload.single("file"), uploadPhoto)

module.exports = multerRouter;