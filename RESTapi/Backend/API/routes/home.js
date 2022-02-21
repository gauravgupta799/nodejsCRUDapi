const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {AllUsers,SpecificUser,DeleteUser,UpdateUser} = require("../controllers/home")


// Get all Users details
router.get("/details",AllUsers)

// Get perticular user details by id
router.get("/details/:id",auth, SpecificUser) 

// Delete user by id
router.delete("/delete/:id",auth, DeleteUser) 

// Updation of perticular user by id
router.put("/update/:id", auth,UpdateUser )

module.exports = router;