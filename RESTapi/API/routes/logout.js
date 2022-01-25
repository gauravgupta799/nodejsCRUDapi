const express = require('express');
const router =express.Router();

router.get('/', (req, res) => {
    res.send("This is get request of Logout.")
})



module.exports = router;