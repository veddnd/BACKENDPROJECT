import mongoose  from "mongoose"
import {DB_NAME} from "../constants.js"

const connectdb= async()=>{
    try{
        const connection=await mongoose.connect("mongodb+srv://vedikadnd:vedikadnd@cluster0.m1nc5.mongodb.net/Twitch")
        console.log(` mongodb connectted!! DB HOST`)
        //console.log(connection)
    }catch(error){
        console.log("connection error",error);
        process.exit(1);
    }
}

export default connectdb