const mongoose = require("mongoose")


const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://madalievv:A4004950s@cluster0.as0v1nr.mongodb.net/test?appName=Cluster0")
        console.log("MongoDB connected successfully")
    }catch(e) {
        console.error(e)
        process.exit(e)        
    }
}

module.exports = connectDB