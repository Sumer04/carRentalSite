import mongoose, { Schema } from "mongoose";

const carSchema = new mongoose.Schema({
  img: {
    public_id : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    }
  },
  title: {
    type: String,
    required: [true, "Please Enter Your title"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Your Price"],
  },
  star: {
    type: Number,
    required: ["please Enter your star"],
  },
  reviews: {
    type: String,
    required: [true, "please enter your reviews"],
  },
});
export const Car = mongoose.model("Car", carSchema);
