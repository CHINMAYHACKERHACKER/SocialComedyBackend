const router = require("express").Router();
const LoginController = require("../controller/Logincontroller.js");

router.post("/login", LoginController);

module.exports = router;