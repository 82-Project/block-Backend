const userModel = require("../models/userModel")
const postModel = require("../models/postModel")

const create = async (req, res) => {
    const { user, title } = req.body
    if (!user || !title) {
        return res.status(400).json({ message: "mant qosh" })
    }

    const finduser = await userModel.findById(user)

    if (!finduser) {
        return res.status(404).json({ message: "user yoq" })
    }

    if (title.trim().length > 300) {
        return res.status(400).json({ message: "matn 300 oshmasin" })
    }

    const newPost = await postModel({
        user: finduser,
        title: title
    })

    await newPost.save()
    res.status(201).json({ message: "post yaratildi", post: newPost})
}

const getAllposts = async (req, res) => {
    const post = await postModel.find().populate("user")
    res.status(200).json({ message: "hamma postlar", posts: post })
}



module.exports = { create , getAllposts}