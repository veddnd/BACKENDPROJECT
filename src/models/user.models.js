import mongoose, { Schema } from "mongoose"

const userschema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,//to make it as searcheable field in database
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        index:true,//to make it as searcheable field in database
        trim:true,
    },
    avtaar:{
        type:String,
        required:true,
    },
    coverimage:{
        type:String
    },
    wstchhistory:[{
        type:Schema.Types.ObjectId,
        ref:"vedio"
    }],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshtoken:{
        type:String,
    }
},{
    timestamps:true
})

userschema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password= bcrypt.hash(this.password,10)
    next();
})

userschema.methods.isPasswordCorrect= async function (password) {
    return await bcrypt.compare(password, this.password)
    
}

userschema.methods.genrateacesstoken= function (){
    jwt.sign(
        {
        _id:this.id,
        email: this.email,
        username: this.username},
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userschema.methods.genraterefreshtoken= function (){
    jwt.sign(
        {
        _id:this.id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const user= mongoose.model("user",userschema)