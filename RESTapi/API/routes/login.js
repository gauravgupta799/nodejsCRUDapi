const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
router.post("/login", async (req, res, next) => {
	const userfind = await User.findOne({ username: req.body.username });
	if (userfind.length < 1) {
		return res.status(401).json({
			message: "User is not exist",
		});
	}
	const passIsValid = bcrypt.compare(req.body.password, userfind.password);
	if (passIsValid) {
		const AccessToken = jwt.sign(
			{
				username: userfind.username,
				userType: userfind.userType,
				phone: userfind.phone,
				city: userfind.city,
			},
			"accessToken",
			{ expiresIn: "180s" }
		);
		const RefreshToken = jwt.sign(
			{
				username: userfind.username,
				userType: userfind.userType,
				phone: userfind.phone,
				city: userfind.city,
			},
			"refreshToken",
			{ expiresIn: "24h" }
		);

		res.status(200).json({
			username: userfind.username,
			userType: userfind.userType,
			phone: userfind.phone,
			accessToken: AccessToken,
			refreshToken: RefreshToken,
		});
	} else {
		res.status(500).json({ error: passIsValid.error });
	}
});

module.exports = router;
