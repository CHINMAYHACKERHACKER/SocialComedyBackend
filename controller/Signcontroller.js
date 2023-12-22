const SignModel = require("../model/Sign.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.SignController = async (req, res) => {
    const { body:{Email, Password} } = req;
    const HashPassword = await bcrypt.hash(Password, saltRounds);
    try {
        const UserEmail = await SignModel.findOne({ Email: Email });
        if (UserEmail) {
            res.status(400).send("Email Already Exists");
        }
        else {
            const SignData = new SignModel({
                Email: Email,
                Password: HashPassword,
                Image:""
            })
            const SaveData = await SignData.save();
            if (SaveData) {
                res.status(200).send("Registration Sucessfull");
            }
        }
    }
    catch (e) {
        res.send("Pls Fill All Fields");
    }
}