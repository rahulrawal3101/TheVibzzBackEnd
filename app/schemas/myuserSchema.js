import mongoose from "mongoose";
 
const myuserSchema = new mongoose.Schema({
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
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:false,
        default:false
    }

},{timestamps:true});

export default myuserSchema;