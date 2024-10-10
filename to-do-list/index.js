const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    console.log("hello")
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.post('/addProduct', (req, res)=>{
    console.log(req.body)
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            const newData = JSON.parse(data)
            newData.products.push(req.body)
            res.send(newData.products)
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

app.delete('/deleteProduct/:id', (req, res)=>{
    const {id} = req.params
    fs.readFile('./db.json', "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }else{
            const newData = JSON.parse(data)
            const filterData = newData.products.filter((ele)=>ele.id != id)
            console.log(filterData)
            fs.writeFile('./db.json', JSON.stringify(filterData), (err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send("data has been deleted.")
                }
            })
        }
    })
    res.send("ok")
})

app.listen(3535, ()=>{
    console.log("Server is running.")
})