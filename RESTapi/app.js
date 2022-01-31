const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userroute = require('./API/routes/user');
const loginroute = require('./API/routes/login');
const logoutroute = require('./API/routes/logout');
const homeroute = require('./API/routes/home')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

const mongourl = "mongodb+srv://gauravcom:gupta123@cluster0.wzm9s.mongodb.net/API?retryWrites=true&w=majority";

app.use('/signup', userroute);
app.use('/logout', logoutroute);
app.use('/home',  homeroute);
app.use('/login', loginroute);


app.use((req, res, next)=> {
    res.status(200).json({
        message: 'app is running'
    })
})


mongoose.connect(mongourl).then(()=>{
    console.log("Connected with Database Successfuly..");
}).catch(() =>{
    console.log("Error...")
})

module.exports = app;
