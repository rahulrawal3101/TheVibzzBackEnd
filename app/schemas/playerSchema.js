import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
 
},{timestamps:true});
export default playerSchema;