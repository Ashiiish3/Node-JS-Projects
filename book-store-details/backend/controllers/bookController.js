const express = require('express')
const userRouter = express.Router()

userRouter.get('/books', (req, res)=>{
    console.log("data got.")
    res.send("data got")
})
userRouter.post('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been added")
})
userRouter.put('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been updated")
})
userRouter.delete('/books', (req, res)=>{
    console.log("data got.")
    res.send("data has been deleted.")
})
module.exports = userRouter