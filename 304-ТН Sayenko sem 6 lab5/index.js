const express = require("express")
let app = express()

const cors = require("cors")
app.use(cors())
app.use(express.json())

app.post("/transform", (req, res) =>{
    let number = req.body
    const sum = number.num * number.num
    res.json({ sum })
})

app.listen(3000)