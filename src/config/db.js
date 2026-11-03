const mongoose = require("mongoose")
const dns = require("dns")

// ISP DNS (nano.uz) Node.js dan SRV so'rovlarini bloklayapti — Google DNS ga o'tamiz
dns.setServers(["8.8.8.8", "8.8.4.4"])

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://madalievv:A4004950s@cluster0.as0v1nr.mongodb.net/test?appName=Cluster0")
        console.log("MongoDB connected successfully")
    }catch(e) {
        console.error(e)
        process.exit(1)        
    }
}

module.exports = connectDB