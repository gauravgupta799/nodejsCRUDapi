const express = require("express");
const router = express.Router();
const {LoginUser,RefreshToken} = require("../controllers/login");


// Login
router.post("/login", LoginUser);

// RefreshToken
router.post("/rewNewAccessToken",RefreshToken)

module.exports = router;
