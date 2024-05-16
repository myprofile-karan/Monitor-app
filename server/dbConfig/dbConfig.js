const mongoose = require('mongoose');

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("ERROR:", error);
        throw new Error;
        process.exit(1);
    }
}

module.exports = connect;