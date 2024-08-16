import express from "express";
import {deleteUser, loginUser, LogoutUser, registerUser,sendEmailHandler } from "../controllers/UserController.js";
const Router = express.Router();
export default Router;
Router.route("/register").post(registerUser);
 Router.route("/login").post(loginUser)
 Router.route("/delete").delete(deleteUser)
Router.route('/logout').get(LogoutUser)
Router.route("/sendEmail").post(sendEmailHandler)