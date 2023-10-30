import mongoose from "mongoose";

const titdesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    iscompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export default titdesSchema;