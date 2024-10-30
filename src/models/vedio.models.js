import mongoose, {Schema, schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const vedioschema= new Schema(
        {
            vediofile:{
                type:String,
                required:true
            },
            thumbnail:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            desc:{
                type:String,
                required:true
            },
            duration:{
                type:Number,
                required:true
            },
            views:{
                type:Number,
                default:0
            },
            ispublished:{
                type:Boolean,
                default:true
            },
            owner:{
                type:Schema.Types.ObjectId,
                ref:"user"
            }

    },
    {
        Timestamp:true
    }
)
vedioschema.plugin(mongooseAggregatePaginate)

export const vedio = mongoose.model("vedio",vedioschema);