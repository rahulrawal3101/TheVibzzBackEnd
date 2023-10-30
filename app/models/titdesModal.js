import mongoose from "mongoose";
import titdesSchema from "../schemas/titdesSchema";

const TitleDescription = mongoose.models.TitleDescription||new mongoose.model('TitleDescription',titdesSchema);

export default TitleDescription 