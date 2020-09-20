const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Database Schema
const imageCollect = new Schema({
    image1:{
        type:Buffer,
        required:true,
    },
    image2:{
        type:Buffer,
        required:true,
    }
    ,image3:{
        type:Buffer,
        required:true,
    },
    imageID:{
        type:String,
        required:true,
    },
    });
    module.exports = imageCollect
