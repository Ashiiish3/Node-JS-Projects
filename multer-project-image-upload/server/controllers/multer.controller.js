const uploadPhoto = (req, res) => {
    console.log(req.file)
    res.send("Ok")
}

module.exports = { uploadPhoto }