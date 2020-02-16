const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    prod:[{
        type:String
    }],
    totalprice:{
        type:Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);