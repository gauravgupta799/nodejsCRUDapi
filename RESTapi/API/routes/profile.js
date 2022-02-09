const express = require('express');
const router =express.Router();
const Image = require('../controllers/profile')
const {upload} = require('../middleware/profile')
const auth = require("../middleware/auth");

// Image Upload
router.post('/upload',auth, upload,Image)

module.exports = router;