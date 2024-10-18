const express = require("express")
const fs = require("fs")
const app = express()
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(cors())

app.get('/products', (req, res)=>{
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            const newData = JSON.parse(data)
            res.send(newData.products)
        }
    })
})

app.get('/products/:id', (req, res)=> {
    const { id } = req.params;
    fs.readFile('./db.json', 'utf-8', (err,data)=>{
        if(err){
            console.log(err)
        }else{
            const newData = JSON.parse(data)
            newData.products.forEach(element => {
                if(element.id==id){
                    res.send(element)
                }
            })
        }
    })
})

app.post('/products', (req, res)=>{
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            const newData = JSON.parse(data)
            newData.products.push({...req.body, id:uuidv4()})
            fs.writeFile('./db.json', JSON.stringify(newData), (err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send("data added successfully.")
                }
            })
        }
    })
})

app.put('/products/:id', (req, res)=>{
    const {id} = req.params
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            const newData = JSON.parse(data)
            const index = newData.products.findIndex((ele)=> ele.id == id)
            if(index != -1){
                newData.products[index] = {...newData.products[index], ...req.body}
                fs.writeFile('./db.json', JSON.stringify(newData), (err)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.send(newData.products)
                    }
                })
            }else{
                res.send("Product not found.")
            }
        }
    })
})

app.delete('/products/:id', (req, res)=>{
    const {id} = req.params
    fs.readFile('./db.json', "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }else{
            let newData = JSON.parse(data)
            const filterData = newData.products.filter((ele)=>ele.id != id)
            newData.products = filterData
            fs.writeFile('./db.json', JSON.stringify(newData), (err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send("data has been deleted.")
                }
            })
        }
    })
})

app.listen(3535, ()=>{
    console.log("Server is running.")
})