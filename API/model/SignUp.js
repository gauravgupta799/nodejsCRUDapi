const mongoose = require('mongoose')

const userdetailsSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: [true, "username is already defined"]
    },
    password:{
        type:String,
        required: true,
        min:8,max:15},
    qualification:String,
    city:String,
    phone:{
        type:Number, 
        min:10,
        max:10
    }
}) 

module.exports = mongoose.model('Userdetail', userdetailsSchema);

