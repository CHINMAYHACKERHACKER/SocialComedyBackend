var jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

exports.VerfiyTokenController = async (req, res) => {
    jwt.verify(req.token, privateKey, function (err, Data) {
        if (err) {
            res.status(400).send("Invalid Token");
        }
        else {
            res.status(200).send("Token Verifyed Sucessfully");
        }
    })
}