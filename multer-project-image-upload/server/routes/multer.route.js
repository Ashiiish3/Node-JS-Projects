const express = require("express");
const { uploadPhoto, getImages } = require("../controllers/multer.controller");
const upload = require("../config/multer");

const multerRouter = express.Router()

multerRouter.post("/upload", upload.single("file"), uploadPhoto)
multerRouter.get("/getImage", getImages)

module.exports = multerRouter;