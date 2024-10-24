const express = require('express')
const { getData, getDataWithId, postData, updateData, deleteData } = require('../controllers/bookController')
const userRouter = express.Router()

userRouter.get('/books', getData)
userRouter.get('/books/:id', getDataWithId)
userRouter.post('/books', postData)
userRouter.put('/books/:id', updateData)
userRouter.delete('/books/:id', deleteData)

module.exports = userRouter;