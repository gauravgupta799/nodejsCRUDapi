const express = require("express");
const router = express.Router();

router.get("/logout", (req, res) => {
	try {
		res.send("You are successfully logged out!");
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
});

module.exports = router;
