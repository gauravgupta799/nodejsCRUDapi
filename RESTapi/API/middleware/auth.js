const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secretAccess = process.env.ACCESS_TOKEN;


const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const verifyUser = jwt.verify(token, secretAccess);
		verifyUser.userType == "admin"
			? next()
			: res.status(401).json({ msg: "Not admin" });
	} catch (err) {
		return res.status(401).json({
			message: "Invalid Token",
		});
	}
};

module.exports = auth;
