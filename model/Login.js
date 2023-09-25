const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    GoogleId: { type: String },
    FaceBookId: { type: String },
    InstagramId: { type: String },
    Email: { type: String },
    Password: { type: String }
})

const LoginModel = mongoose.model("login", LoginSchema);

module.exports = LoginModel;