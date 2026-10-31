const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nF-82BlogPosts"
    },
    avatar: {
        type: String
    }
})

module.exports = mongoose.model("nF-82BlogUsers", userModel)