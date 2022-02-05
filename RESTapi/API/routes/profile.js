const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const userImage= require('../model/profile')
const path = require('path');
const auth = require("../middleware/auth");


const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) =>{
        cb(null, new Date().toString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // console.log(file)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({
    storage: Storage,
    limits: {filesize: 1024 * 1024 * 5},
    fileFilter: fileFilter
}).single('usertImage')


router.post('/upload',auth,upload,(req, res, next)=>{
    const profileImage = new userImage({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        userImage:req.file
    });
    profileImage
    .save()
    .then((result) => {
        // console.log(result);
        res.status(200).json({
            message:"Image Uploaded successfully",
            uploadedImage: {
                _id: result._id,
                name:result.name,
                request:{
                    type:'GET',
                    url:"http://localhost:8800/api/user/upload/" + result._id 
                }
            }
        })
    })
    .catch((err) => {
        // console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
    

module.exports = router;