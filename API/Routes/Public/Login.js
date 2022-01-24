const express =require('express');
const router =express.Router();


router.post('/', (req, res) => {
    res.status(200).json({
        message:"This is Login Post request."
    })
})

module.exports = router;