import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../App.css";
 import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/user";
const Navbar = () => {
const { user, isAuthenticated } = useSelector((state) => state.useReducer);
 const dispatch =  useDispatch();
 const nav  = useNavigate();
 function logoutHandler(){
  dispatch(logout())
  nav("/")
 }
  return (
    <div className="flex justify-center">
      <div className="displayHidden w-[1200px]">
        <div className="flex justify-between   p-4">
          <div className="flex">
          <Link to="/ " className="flex">
          <img className="px-2" src={Logo} alt="" />
          <h1 className="text-customBlue/100">RENTALCARS</h1>
          </Link>
          </div>

          <div className="flex gap-10">
          <Link to="/">Home</Link>
            <Link to="rentaldeals">Rental deals</Link>
            <Link to="works">How it work</Link>
            <Link to="chooseUs">Why choose us</Link>
            <Link to="/book">Book Now</Link>
            <Link to="contactUs">ContactUs</Link>
          </div>

          {isAuthenticated ? (
           
           <div className="flex gap-2">
             <p>{user.name}</p>
            <Link to="">
            <button className="bg-gray-400/50 border rounded-md px-1  text-white" onClick={logoutHandler}>
              Logout
            </button>
          </Link>
           </div>
          ) : (
            <div className=" space-x-5">
              <Link to="login">
                <button className="">login</button>
              </Link>
              <Link to="signup">
                <button className="bg-customBlue/50 border rounded-md px-3  text-white">
                  Signup
                </button>
              </Link>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
