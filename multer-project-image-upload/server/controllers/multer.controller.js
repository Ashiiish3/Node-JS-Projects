const fileModel = require("../models/multer.model")

const uploadPhoto = async (req, res) => {
    try {
        if(req.file != null){
            await fileModel.create(req.file)
            res.status(201).json({message: "File uploaded successfully."})
        }
    } catch (error) {
        res.send({error})
    }
}
const getImages = async (req, res) => {
    try {
        const getImages = await fileModel.find()
        res.send(getImages)
    } catch (error) {
        res.send({error})
    }
}

module.exports = { uploadPhoto, getImages }