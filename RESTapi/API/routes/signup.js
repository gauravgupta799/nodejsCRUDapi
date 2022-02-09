const express = require("express");
const router = express.Router();
const RegisterUser = require("../controllers/signup");


// Register
router.post("/signup", RegisterUser);

module.exports = router;