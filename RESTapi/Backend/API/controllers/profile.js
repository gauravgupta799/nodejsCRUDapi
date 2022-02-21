const mongoose = require("mongoose");
const userImage = require("../model/profile");

const Image = (req, res) => {
	const profileImage = new userImage({
		_id: new mongoose.Types.ObjectId(),
		userImage: req.file.userImage,
		name: req.body.name,
	});
	console.log(profileImage);
	profileImage
		.save()
		.then((result) => {
			// console.log(result);
			res.status(200).json({
				message: "Image Uploaded successfully",
				uploadedImage: {
					_id: result._id,
					name: result.name,
					request: {
						type: "GET",
						url: "http://localhost:8800/api/user/upload/" + result._id,
					},
				},
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
};

module.exports = Image;
