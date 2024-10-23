const express = require('express')
const bookModel = require('../models/book')
const userRouter = express.Router()

userRouter.get('/books', async (req, res)=>{
    try {
        let books = await bookModel.find()
        if(!books){
            res.send("Product not Found.")
        }
        res.send(books)
    } catch (error) {
        res.send(error)
    }
})
userRouter.get('/books/:id', async (req, res)=>{
    const { id } = req.params
    try {
        let books = await bookModel.findById(id)
        if(!books){
            res.send("Product not Found.")
        }
        res.send(books)
    } catch (error) {
        res.send(error)
    }
})
userRouter.post('/books', async (req, res)=>{
    try {
        const books = new bookModel(req.body)
        books.save()
        res.send(books)
    } catch (error) {
        res.send(error)
    }
})
userRouter.put('/books/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        await bookModel.findByIdAndUpdate(id, req.body)
        res.send("data has been updated")
    } catch (error) {
        console.log(error)
    }
})
userRouter.delete('/books/:id', async (req, res)=>{
    const { id } = req.params;
    try {
        const deleteitem = await bookModel.findByIdAndDelete(id)
        if(!deleteitem) return res.send("Product not Found.")
        res.send(deleteitem)
    } catch (error) {
        res.send(error)
    }
})
module.exports = userRouter;