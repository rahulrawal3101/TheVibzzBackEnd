import mongoose from "mongoose";
import itemSchema from "../schemas/itemSchemas";

const Item = new mongoose.model('Item',itemSchema);

export default Item;