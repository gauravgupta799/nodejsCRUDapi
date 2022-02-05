const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true
    },
   userImage: {
       Type:String, 
       data:Buffer
    }
}); 
//  const ImageModel = ;
module.exports = mongoose.model('userImage', imageSchema);


