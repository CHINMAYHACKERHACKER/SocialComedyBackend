const authorize = (req, res, next) => {
    const JWTToken = req.headers['authorization'];
    if (typeof JWTToken !== "undefined") {
        const Bearer = JWTToken.split(" ");
        const token = Bearer[1];
        req.token = token;
        next();
    } else {
        res.status(401).send("Invalid Token");
    }
};

module.exports = authorize;
