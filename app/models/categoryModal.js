import mongoose from "mongoose";
import categorySchema from "../schemas/categorySchema";

const Categorie = new mongoose.model('Categorie',categorySchema);

export default Categorie;