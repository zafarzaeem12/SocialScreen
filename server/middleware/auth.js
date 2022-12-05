const jwt = require('jsonwebtoken');

const verify_access_token = (req, res, next) => {

    const token = req.headers['authorization'].split(" ")[1];
    
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const secret = "create_newuSers";
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user
        next();
    } catch (err) {
        res.status(400).send("Invalid token.");
    }
    return next
}


module.exports = verify_access_token