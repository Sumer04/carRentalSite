

import {instance} from  "../server.js";
import crypto from 'crypto'
import { Payment } from "../model/payment.js";
export const checkout = async(req,res)=>{
try {
    const options = {
        amount :Number(req.body.amount*100),
        currency:"INR"
    }
    const order = await instance.orders.create(options);
    res.status(201).json({success:true,order})
} catch (error) {
    res.status(500).json({error})
}
}

export const paymentverification  =  async(req,res)=>{
    const {razorpay_signature,razorpay_payment_id, razorpay_order_id} = req.body;
    const body =  razorpay_order_id + "|" +razorpay_payment_id ;
    const expectedSignature =  crypto
    .createHmac("sha256",process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
   
 const isAuthentic = expectedSignature===razorpay_signature;
    if(isAuthentic){
     await Payment.create({
        razorpay_signature,razorpay_payment_id, razorpay_order_id
     })
     res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
}else{
    res.status(404).json("ERROR")
}
}