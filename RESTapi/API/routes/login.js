const express = require('express');
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Login api
    router.post('/',(req, res,next) => {
    User.find({username: req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1){
            return res.status(401).json({
                message: 'User is not exist'
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
                  city:User[0].city,
              },'this is a valid token',
              {
                  expireIn:"24h"
              });
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
