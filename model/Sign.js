const mongoose = require("mongoose");

const SignSchema = new mongoose.Schema({
    Email: { type: String },
    Password: { type: String },
    Image: { type: String },
})
const SignModel = mongoose.model("sign", SignSchema);

module.exports = SignModel;