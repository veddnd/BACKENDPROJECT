import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:  process.env.CLOUDINARY_CLOUD_API, 
        api_secret:  process.env.CLOUDINARY_CLOUD_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

    const fileuploadoncloudinary= async(filepath)=>{
        try{
            if(!filepath)return null
            const response= await cloudinary.uploader.upload(filepath,{
                resource_type:"auto"
            })
            //uploaded succesfully
            console.log("file uploaded succesfully", response.url)
            return response;

        }
        catch(error){
            fs.unlinkSync(filepath)
            return null;

        }
    }