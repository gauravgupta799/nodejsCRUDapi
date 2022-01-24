const express =require('express');
const app = express();
const mongoose =require('mongoose');
const signuprouter = require('./Routes/Public/SignUp');
const loginrouter = require('./Routes/Public/Login');
const home = require('./Routes/Private/Home');
const logout = require('./Routes/Private/Logout');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

const mongourl = "mongodb+srv://gauravcom:gupta123@cluster0.wzm9s.mongodb.net/API?retryWrites=true&w=majority";

app.use('/signup', signuprouter);
app.use('/login', loginrouter);
app.use('/logout', logout);
app.use('/home', home);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'App is running successfully.'
    })
})


mongoose.connect(mongourl).then(()=>{
    console.log("Connected with Database..");
}).catch(() =>{
    console.log("Error...")
})

module.exports = app;