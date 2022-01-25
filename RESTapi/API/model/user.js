const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username: String,
    password:String,
    qualification:String,
    city:String,
    phone:Number, 
    userType:String
}); 

module.exports = mongoose.model('Userdetail', userSchema);

