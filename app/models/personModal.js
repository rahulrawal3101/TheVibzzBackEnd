import mongoose from "mongoose";
import personSchema from "../schemas/personSchema";

const Person = mongoose.models.Person || new mongoose.model('Person', personSchema);

export default Person;