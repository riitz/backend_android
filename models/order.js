const mongoose = require('mongoose');
const orderSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    quantity:{
        type:Number,
        required:true

    }
},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);