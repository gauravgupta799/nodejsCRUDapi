const express =require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Userdetail = require('../model/SignUp')

router.post('/', (req, res,next) => {
   const user = new Userdetail({
    _id:new mongoose.Types.ObjectId,
    username:req.body.username,
    password:req.body.password,
    qualification:req.body.qualification,
    city:req.body.city,
    phone:req.body.phone
   });

   user.save()
   .then(result=>{
       console.log(result);
       res.status(200).json({
           newUser:result
       })
   }).catch(err=>{
       console.log(err);
       res.status(500).json({
           error: err
       })
   })
})

module.exports = router;