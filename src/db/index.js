import mongoose  from "mongoose"
import {DB_NAME} from "../constants.js"

const connectdb= async()=>{
    try{
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(` mongodb connectted!! DB HOST`)
        console.log(connection)
    }catch(error){
        console.log("connection error",error);
        process.exit(1);
    }
}

export default connectdb