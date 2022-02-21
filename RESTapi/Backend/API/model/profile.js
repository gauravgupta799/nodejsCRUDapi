const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userImage: {
		Type: String,
		data: Buffer,
	},
});

module.exports = mongoose.model("userImage", ImageSchema);
