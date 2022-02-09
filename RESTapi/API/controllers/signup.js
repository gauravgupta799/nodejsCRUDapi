const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");

// REGISTRATION
const RegisterUser = async (req, res) => {
	const { username, password, city, qualification, phone } = req.body;
	if (!username || !password || !qualification || !city || !phone) {
		res.status(404).json({ message: "Please fill the all fields." });
	}
	 bcrypt.hash(req.body.password, 10, (err, hash) => {
		if (err) {
			return res.status(500).json({
				error: err,
			});
		} else {
			const user = new User({
				_id: new mongoose.Types.ObjectId(),
				username: req.body.username,
				password: hash,
				qualification: req.body.qualification,
				city: req.body.city,
				phone: req.body.phone,
				userType: req.body.userType ? req.body.userType : "User",
			});
			user.save()
				.then((result) => {
					console.log(result);
					res.status(200).json({
						newUser: result,
					});
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({
						error: err,
					});
				});
		}
	});
};

module.exports = RegisterUser;
