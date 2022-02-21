const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: { type: String, required: true },
	password: { type: String, required: true },
	qualification: { type: String, required: true },
	city: { type: String, required: true },
	phone: { type: Number, required: true },
	userType: { type: String, required: true },
});

// const UserModel =
module.exports = mongoose.model("Userdetail", userSchema);
