import app from "./app.js";
import connectdb from "./config/database.js";
import RazorPay from 'razorpay'
connectdb();

export var instance  = new RazorPay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
});
app.listen(process.env.PORT,()=>{
    console.log("Backend Server Started ",process.env.PORT)
})
