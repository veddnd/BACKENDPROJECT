//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import app from "/src/app.js"

import connectdb from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT|| 5000,()=>{
        console.log("app is listening");
    });
})
.catch((error)=>{
    console.log("db connection failed !!",error);
})