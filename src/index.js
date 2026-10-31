const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")


const PORT = 8000

const app = express()
connectDB()

app.use(express.json())
app.use(cors("*"))

app.get("/", (req, res) => {
    res.send("Server ishladi!")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})