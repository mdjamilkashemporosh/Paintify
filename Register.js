const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Database Schema
const Register = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
    ,password:{
        type:String,
        required:true,
        minlength:6,
    },
    refferal:{
        type:String,
        minlength:6,
    },
    ownrefferal:{
        type:String,
        minlength:6,
    },
    earn:{
        type:Number,
    }
    });
    module.exports = Register
