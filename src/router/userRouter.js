const express = require("express")
const router = express.Router()

const { userEdite, getByid } = require("../controllers/userController")

router.patch("/edit/:id", userEdite)
router.get("/user/:id", getByid)

module.exports = router