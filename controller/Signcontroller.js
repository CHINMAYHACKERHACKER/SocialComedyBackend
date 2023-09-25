const SignModel = require("../model/Sign.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (req, res) => {
    const { Email, Password, Mobile, Otp } = req.body;
    const HashPassword = await bcrypt.hash(Password, saltRounds);
    try {
        const UserEmail = await SignModel.findOne({ Email: Email });
        if (UserEmail) {
            res.send("Email Already Exists");
        }
        else {
            const SignData = new SignModel({
                Email: Email,
                Password: HashPassword,
                Image: req.file.destination + req.file.filename,
                MobileNumber: Mobile || "",
                Otp: Otp || "",
            })
            const SaveData = await SignData.save();
            if (SaveData) {
                res.status(200).send("Registration Sucessfull");
                // console.log("Signedup sucessfully");
            }
        }
    }
    catch (e) {
        res.send("Pls Fill All Fields");
    }
}