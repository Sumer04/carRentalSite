import { User } from "../model/User.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcrypt";
import sendToken from "../utils/sendToken.js";
import nodemailer from "nodemailer";
export const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Fill all fields", 400));
  }
  const isExist = await User.findOne({ email });
  if (isExist) {
    return next(new ErrorHandler("user is already exist", 400));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  return sendToken(newUser, "user Created Successfully", 201, res);
});
export const deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    return next(new ErrorHandler("user not found"), 400);
  }
  const deleteUser = await User.deleteOne({ _id: id });
  await deleteUser.save();
  return sendToken(newUser, "user Created Successfully", 201, res);
});

export const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(next(new ErrorHandler("pleae register email"), 500));
  }
  const passwordMatcn = await user.comparePassword(password);
  if (!passwordMatcn) {
    return next(new ErrorHandler("Wrong Password", 500));
  }
  return sendToken(user, "login Successfully", 201, res);
});

export const LogoutUser = catchAsyncError(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout SuccessfuLLY",
    });
});

// const transporter =  nodemailer.createTransport({
//   host:"smtp.ethernal.email",
//   port:4000,
//   secure:false,
//   auth:{

//     user:process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   }
// })
export const sendEmailHandler = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "santurajpurphit@gmail.com",
      to: "santurajpurphit@gmail.com", // Replace with your email
      subject: `New contact form submission from ${name}`,
      body: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
    });
    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
};
