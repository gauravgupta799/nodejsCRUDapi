const express = require("express");
const router = express.Router();

router.get("/logout", (req, res) => {
	try {
		res.send("You are successfully logged out!");
		// res.render("login")
		res.redirect('/api/user/login')
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
});

module.exports = router;
