import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
const Navbar = () => {
  return (
    <div className="flex justify-between border border-red-500 " >
      <div className="flex">
      <img className="px-2"src={Logo} alt=""/><h1 className="text-customBlue">RENTALCARS</h1>
      </div>
      
      <div className="flex gap-3">
        <Link to="/path-one">Become a renter</Link>
        <Link to="/path-two">Rental deals</Link>
        <Link to="/path-three">How it work</Link>
        <Link to="/path-four">Why choose us</Link>
    
      </div>
      
      <div className=" space-x-5">
        <button className="">Sign in</button>
        <button className="bg-customBlue border rounded-md px-3  text-white">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
