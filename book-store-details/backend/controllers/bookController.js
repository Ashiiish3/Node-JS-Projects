const bookModel = require('../models/book')

const getData = async (req, res) => {
    try {
        let books = await bookModel.find()
        if (!books) {
            res.send("Product not Found.")
        }
        res.send(books)
    } catch (error) {
        res.send(error)
    }
}
const getDataWithId = async (req, res) => {
    const { id } = req.params
    try {
        let books = await bookModel.findById(id)
        if (!books) {
            res.send("Product not Found.")
        }
        res.send(books)
    } catch (error) {
        res.send(error)
    }
}
const postData = async (req, res) => {
    try {
        const books = new bookModel(req.body)
        books.save()
        res.send(books)
    } catch (error) {
        res.send(error)
    }
}
const updateData = async (req, res) => {
    const { id } = req.params;
    try {
        await bookModel.findByIdAndUpdate(id, req.body)
        res.send("data has been updated")
    } catch (error) {
        console.log(error)
    }
}
const deleteData = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteitem = await bookModel.findByIdAndDelete(id)
        if (!deleteitem) return res.send("Product not Found.")
        res.send(deleteitem)
    } catch (error) {
        res.send(error)
    }
}
module.exports = { getData, getDataWithId, postData, updateData, deleteData };