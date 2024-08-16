import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/userRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"
import carRoutes from "./routes/carRoutes.js"

import errormiddleware from "./middleware/errormiddleware.js";
import cors from "cors";

config({ path: "./config/config.env" });

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1",paymentRoutes)
app.use("/api/v1", carRoutes)

export default app;
app.get("/api/v1/getKey",(req,res)=>res.status(200).json({key:process.env.RAZORPAY_API_KEY}))
app.use(errormiddleware);
