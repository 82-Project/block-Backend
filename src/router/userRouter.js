const express = require("express")
const router = express.Router()

const { userEdite, getByid, login , getAlluser , register , deleteAll} = require("../controllers/userController")

router.patch("/edit/:id", userEdite)
router.get("/user/:id", getByid)
router.get("/user", getAlluser)
router.post("/login" , login)
router.post("/register" , register)
router.delete("/deleteAll" , deleteAll)
 
module.exports = router