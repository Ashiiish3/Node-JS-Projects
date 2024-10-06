const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.method)
    if (req.method == "GET" && req.url == "/home") {
        res.end("this is home page.")
    } else if (req.method == "GET" && req.url == "/about") {
        res.end("this is about page.")
    } else if (req.method == "GET" && req.url == "/getproductdata") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            } else {
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.products))
            }
        })
    } else if (req.method == "GET" && req.url == "/user") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            } else {
                const jsonData = JSON.parse(data);
                res.end(JSON.stringify(jsonData.user));
            }
        })

    } else {
        res.end("Request not Match")
    }
})
server.listen(3535, () => {
    console.log("server is running.")
})