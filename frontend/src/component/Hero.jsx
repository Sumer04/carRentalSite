import React from "react";
import car from "../assets/car.png";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
const Hero = () => {
  return (
    <div className="flex justify-between items-center py-20 flexColll tab:mx-[90px]">
      <div className="heroChildOne ">
        <h1 className="font-extrabold text-[38px] tab:text-lg mb-4 mobile:text-2xl mobile:w-[420px] ">
          Find,book and rent a car{" "}
          <span className="text-customBlue">Easily</span>
        </h1>
        <p className="text-[15px] mb-4 mobile:text-[10px] ">
          Get a car wherever and whenever you need it with your IOS and Android
          device
        </p>
        <div className="flex space-x-6 my-2 centerJustify mobile:pb-4 ">
          <img src={GooglePlay} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>
      
      <img src={car} alt="" className="mobile:w-[350px] tab:w-[300px]" />
    </div>
  );
};

export default Hero;
