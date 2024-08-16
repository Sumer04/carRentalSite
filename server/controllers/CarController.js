import catchAsyncError from "../middleware/catchAsyncError.js";
import { Car } from "../model/Car.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { imageUpload } from "./uploadImage.js";

export const createCar = catchAsyncError(async (req, res, next) => {
  const {  title, price,star,reviews } = req.body;
const img  =  req.file;

//   if (!title || !price || !star || !reviews) {
//     return next(new ErrorHandler("please fill all the fields", 400));
//   }
const response  = await imageUpload(img,"carImage")
  const NewCar = await Car.create({
    img: {
        public_id: response.public_id,
        url: response.secure_url,
      },
    title,
    price,
    star,reviews,
  });
  if (!NewCar) {
    res.status(201).json("NewCar Not added");
  }
  res.status(201).json(NewCar);
});
