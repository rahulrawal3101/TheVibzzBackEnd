import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:false,
        default:false
    },
    address:{
        type:String,
        required:true
    },
    wallet:{
        type:Number,
        required:false,
        default:50
    },
    refferalCode:{
        type:String,
        required:false,
        default:'AD874P'
    },
    refferCount:{
        type:Number,
        required:false,
        default:0
    },
},{timestamps:true});

export default personSchema;