const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product:{
        type:String
    },
    brand:{
        type:String
    },
    price:{
       type:String
    },
    Image:{
        type:String
    },

},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);