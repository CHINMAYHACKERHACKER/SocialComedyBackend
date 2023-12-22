const SignModel = require("../model/Sign.js");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const privateKey = process.env.PRIVATE_KEY;
require('dotenv').config()

exports.LoginController = async (req, res) => {
    const { body: { Email, Password } } = req;
    try {
        const UserData = await SignModel.findOne({ Email: Email });
        if (!UserData) {
            res.status(400).send("Incorrect Email Address");
        }
        else {
            const PasswordBoolean = await bcrypt.compare(Password, UserData.Password);
            if (!PasswordBoolean) {
                res.status(401).send("Invalid Password");
            }
            else {
                var token = jwt.sign({ UserData }, privateKey, { expiresIn: '2h' });
                res.status(200).send(token);
            }
        }
    }
    catch (e) {
        res.status(500).send("Internal Server Error");
    }
}