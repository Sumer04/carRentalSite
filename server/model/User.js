import mongoose from 'mongoose';
import validator from 'validator';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],

    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"please Enter  a valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password "],
        minlength:[6,"Enter more than 6 char in password"],
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
  

})
userSchema.method("comparePassword",async function(password){
    return await bcrypt.compare(password,this.password)
})
userSchema.method("generateToken",function(){
   
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:"5d",
    })
})

export const User = mongoose.model("User",userSchema);