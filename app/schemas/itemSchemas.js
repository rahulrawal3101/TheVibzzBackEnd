import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemName:{
      type:String,
      required:true, 
      trim:true 
    },
    mrp:{
        type:Number,
        required:true,
        trim:true,  
    },
    srp:{
        type:Number,
        required:true,
        trim:true
    },
    isAvailable:{
        type:Boolean,
        required:true,
    },
    description:{
        type:String,
        trim:true,
    },
    ingredients:[
        {name:{type:String,required:false}}
    ],
    isPopular:{
        type:Boolean,
        required:false,
        default:false
    }

},{timestamps:true});

export default itemSchema