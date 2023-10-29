import mongoose from "mongoose";
import userSchema from "../schemas/userSchema";

const Employee = new mongoose.model('Employee',userSchema);

export default Employee;