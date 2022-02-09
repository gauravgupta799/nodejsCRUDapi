const User = require("../model/user");

// ALL USER DETAILS
const AllUsers = (req, res, next) => {
	User.find()
		.then((result) => {
			// console.log(result);
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
};

// GET PERTICULAR USER BY ID
const SpecificUser = (req, res) => {
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
};

// DELETE USER BY ID
const DeleteUser = (req, res) => {
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
};

// UPDATE USER BY ID
const UpdateUser = (req, res) => {
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
};

module.exports = { AllUsers, SpecificUser, DeleteUser, UpdateUser };
