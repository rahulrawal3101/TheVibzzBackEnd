import { MONGO_URL } from "@/constant";
import mongoose from "mongoose";

let connection;


const CONNECT_DATABASE =async ()=>{
    console.log('Conn Req Rec');
    if(!connection) {
        connection = await mongoose.connect(MONGO_URL);
    }
    console.log('Database Connected Successfully!!!');
    return connection;
}

export default CONNECT_DATABASE;