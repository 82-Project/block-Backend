const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

connectDB()
const userRouter = require("./router/userRouter")
const postRouter = require("./router/postRoutes")

const PORT = 8000

const app = express()

app.use(express.json())
app.use(cors("*"))

app.get("/", (req, res) => {
    res.send("Server ishladi!")
})

app.use("/users", userRouter)
app.use("/posts", postRouter)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})