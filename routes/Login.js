const router = require("express").Router();
const { LoginController } = require("../controller/Logincontroller.js");
const { VerfiyTokenController } = require("../controller/Verifytokencontroller.js");
const authorize = require('../middleware/authorizationMiddleware.js');
router.post("/login", LoginController);
router.post("/verify", authorize, VerfiyTokenController);
module.exports = router;