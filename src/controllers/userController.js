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

module.exports = { userEdite, getByid }