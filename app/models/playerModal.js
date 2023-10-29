import mongoose from "mongoose";
import playerSchema from "../schemas/playerSchema";

const Player = new mongoose.model('Player',playerSchema);
export default Player
