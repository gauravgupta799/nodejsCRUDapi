const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup api
router.post('/', (req, res,next) => {
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        else{
            const user = new User({
              _id:new mongoose.Types.ObjectId,
              username:req.body.username,
              password:hash,
              qualification:req.body.qualification,
              city:req.body.city,
              phone:req.body.phone,
              userType:req.body.userType
            })

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
        }
    })
})

// Login api

router.post('/login', (req, res) => {
    User.find({username: req.body.username})
    .exac()
    .then(User=>{
        if(User.length < 1){
            return res.status(401).json({
                message: 'User in not exist'
            })
        }
        bcrypt.compare(req.body.password, User[0].password, (err, result)=>{
            if(!result){
                return res.status(401).json({
                    message: 'Password is not matched'
                })
            }
            if(result){
              const Token = jwt.sign({
                  username:User[0].username,
                  userType:User[0].userType,
                  phone:User[0].phone,
                  city:User[0].city
              },'This is a token',{expireIn:"24h"}
              )
              res.status(200).json({
                  username:User[0].username,
                  userType:User[0].userType,
                  phone:User[0].phone,
                  token:Token
              })
            }
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
 })

module.exports = router;
