const express = require("express")
const router = express.Router()

const { create , getAllposts } = require("../controllers/postController")

router.post("/create", create)
router.get("/posts" , getAllposts)

module.exports = router