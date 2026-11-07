const userModel = require("../models/userModel")

const userEdite = async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, username, email, phone, password, posts, avatar } = req.body

    const userId = await userModel.findById(id)

    if (!userId) {
        return res.status(404).json({ message: "bunday user yoq" })
    }

    if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ message: "hamma malumtolarni toldir " })
    }

    const editeUser = await userModel.findByIdAndUpdate(id, {
        firstName,
        lastName,
        username,
        email,
        phone,
        password,
        posts,
        avatar
    })

    await editeUser.save()

    res.status(200).json({ message: "user ozgatirildi", user: editeUser })
}

const getByid = async (req, res) => {
    const { id } = req.params
    const user = await userModel.findById(id)
    if (!user) {
        return res.status(404).json({ message: "bunday user yoq" })
    }

    res.status(200).json({ message: "user topildi", user: user })
}

const getAlluser = async (req, res) => {
    const users = await userModel.find()

    res.status(200).json({ message: "hamma userlar", user: users })
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "hamma malumotlarni toldir" })
    }

    const user = await userModel.findOne({ email })

    if (!user || user.password !== password) {
        return res.status(404).json({ message: "bunday account yoq" })
    }

    res.status(200).json({ message: "accountga kirding", user: user })
}

const register = async (req, res) => {
    const { firstName, lastName, username, email, phone, password, avatar } = req.body
    if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ message: "hamma malumotni toldir" })
    }

    const findEmail = await userModel.findOne({ email })

    if (findEmail) {
        return res.status(400).json({ message: "bu email account ochilgan " })
    }

    const userName = await userModel.findOne({ username })

    if (userName) {
        return res.status(400).json({ message: "username band" })
    }

    const newUser = await userModel({
        firstName,
        lastName,
        username,
        email,
        phone,
        password,
        avatar
    })

    await newUser.save()
    res.status(201).json({ message: "user yaratildi", user: newUser })
}

const deleteAll = async (req , res) => {
    const users = await userModel.deleteMany({})
    res.status(200).json({message: "hamma userlar ochirildi "})
}

module.exports = { userEdite, getByid, login, getAlluser, register ,deleteAll }