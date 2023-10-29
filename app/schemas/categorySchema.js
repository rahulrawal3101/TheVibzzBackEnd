import mongoose from "mongoose";

 const categorySchema = new mongoose.Schema({
    catName:{
        type:String,
        required:true,
        trim:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    },
    size:{
        type:String,
        trim:true,
        required:true
    },
    mrp:{
        type:Number,
        required:true   
    },
    isPopular:{
        type:Boolean,
        default:false,
        required:true
    }

 },{timestamps:true});

 export default categorySchema