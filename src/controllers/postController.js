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
    res.status(201).json({ message: "post yaratildi", post: newPost })
}

const getAllposts = async (req, res) => {
    const post = await postModel.find().populate("user")
    res.status(200).json({ message: "hamma postlar", posts: post })
}

const deletePost = async (req, res) => {
    const { id } = req.params
    const findPost = await postModel.findByIdAndDelete(id)
    if (!findPost) {
        return res.status(404).json({ message: "bunday post yoq" })
    }
    res.status(200).json({ message: "post ochirildi" })
}


const editePost = async (req, res) => {
    const { id } = req.params
    const { user, title } = req.body
    if (!user || !title) {
        return res.status(400).json({ mesasge: "hamma malumotlarni toldiring" })
    }

    const findPost = await postModel.findById(id)
    if (!findPost) {
        return res.status(404).json({ message: "bunday post topilmadi" })
    }

    const post = await postModel.findByIdAndUpdate(id, {
        user: user,
        title: title
    })

    res.status(200).json({
        message: "post edit qilindi", post: post
    })
}

module.exports = { create, getAllposts, deletePost, editePost }