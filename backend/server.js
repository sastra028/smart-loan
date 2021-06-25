console.log("Server running")
const express = require("express")
console.log("Server running1")
const bodyParser = require('body-parser')
console.log("Server running1.1")
const path = require('path')
console.log("Server running2")
const cors = require("cors")
console.log("Server running3")
const app = express()
console.log("Server running4")
app.use(cors())
console.log("Server running5")
app.use(bodyParser.json())
console.log("Server running6")
app.use("/", express.static(path.join(__dirname, 'angular')))
console.log("Server running7")


var port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Server is ready on "+ `http://localhost:${port}`)
})