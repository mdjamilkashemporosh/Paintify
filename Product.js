const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Database Schema
const Product = new Schema({
    iteam:{
        type:String,
        required:true,
    },
    vendor:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
    ,description:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    BrandName:{
        type:String,
        required:true,
    },
    offer:{
        type:Number,
        required:true
    },
    imageID:{
        type:String,
        required:true
    }
    });
    module.exports = Product
