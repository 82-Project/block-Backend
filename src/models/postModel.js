const mongoose = require("mongoose")

const postModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nF-82BlogUsers",
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("nF-82BlogPosts", postModel)