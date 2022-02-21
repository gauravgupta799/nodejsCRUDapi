const User = require("../model/user");

// ALL USER DETAILS
const AllUsers = async (req, res) => {
	 await User.find()
		.then((result) => {
			// console.log(result);
			res.status(200).json({
				Userdetails: result,
			});
		})
		.catch((err) => {
			// console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};

// GET PERTICULAR USER BY ID
const SpecificUser = async (req, res) => {
	// console.log(req.params.id);
	await User.findById(req.params.id)
		.then((result) => {
			res.status(200).json({
				User: result,
			});
		})
		.catch((err) => {
			console.log(err);
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
				result: result
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