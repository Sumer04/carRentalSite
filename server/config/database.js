
import mongoose from "mongoose";
const connectdb = async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI,{
            dbName:"CarRental"
         })
         console.log("mongodb is successfyully connected");
    } catch (error) {
        console.log("mongodbv not connected successfully");
    }
}
export default connectdb;