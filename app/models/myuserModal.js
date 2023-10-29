import mongoose from "mongoose";
import myuserSchema from "../schemas/myuserSchema";

const MyUser =  mongoose.models.MyUser ||new  mongoose.model('MyUser',myuserSchema);

export default MyUser;
