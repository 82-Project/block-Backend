const express = require("express")
const router = express.Router()

const { create, getAllposts, deletePost, editePost } = require("../controllers/postController")

router.post("/create", create)
router.get("/posts", getAllposts)
router.delete("/delete/:id", deletePost)
router.patch("/edit/:id", editePost)

module.exports = router