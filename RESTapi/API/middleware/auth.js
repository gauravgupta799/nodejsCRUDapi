const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const verify = jwt.verify(token,'this is a valid token');
        verify.userType == "admin" ? next():res.status(401).json({msg:"Not admin"})
    }
    catch (err) {
        return res.status(401).json({
            message: err.message
        })
    }
    
}