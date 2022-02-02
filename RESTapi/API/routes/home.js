const express = require("express");
const router = express.Router();
const User = require("../model/user");
const auth = require("../middleware/auth");

// Get all Users details
router.get("/details", auth, (req, res, next) => {
	User.find()
		.then((result) => {
			res.status(200).json({
				Userdetails: result,
			});
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({
				error: err,
			});
		});
});

// Get perticular user details by id
router.get("/details/:id", auth, (req, res, next) => {
	console.log(req.params.id);
	User.findById(req.params.id)
		.then((result) => {
			res.status(200).json({
				User: result,
			});
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({
				error: err.message,
			});
		});
});

// Delete user by id
router.delete("/delete/:id", auth, (req, res, next) => {
	User.remove({ _id: req.params.id })
		.then((result) => {
			res.status(200).json({
				message: `User deleted successfully `,
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err.message,
			});
		});
});

// Updation of perticular user by id
router.put("/update/:id", auth, (req, res, next) => {
	User.updateOne(
		{ _id: req.params.id },
		{
			$set: {
				username: req.body.username,
				qualification: req.body.qualification,
				city: req.body.city,
				phone: req.body.phone,
			},
		}
	)
		.then((result) => {
			res.status(200).json({
				message: "User updated successfully",
				Updated_User: result,
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});

module.exports = router;
