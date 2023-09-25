const mongoose = require("mongoose");
require('dotenv').config()

const Connection = async () => {
    const Connect = await mongoose.connect(process.env.MONGO_URL);
    if (Connect) {
        console.log("Database Connected");
    }
    return Connect;
}
Connection();

module.exports = Connection;