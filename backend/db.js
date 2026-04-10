const mongoose = require("mongoose")

const db = async()=>{
    try {
        await mongoose.connect("mongodb+srv://hamzasohail99055:hamza@cluster0.6iqjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connection Successfull");
    } catch (error) {
        console.log(error)
        process.exit(0);
    }
}

module.exports = db;
