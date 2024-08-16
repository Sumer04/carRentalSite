import React from "react";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
import iphone from "../assets/iPhone.png";
import FooterSection from "./Footer";
const EndingPage = () => {
  return (
    <div className="">
      <hr className="border-gray-400 border-1 my-8 w-full mobile:w-[420px] "/>

    <div className="  ">
      <div className=" Ending flex justify-between mobile:flex-col   ">
        <div className="ml-10  mt-10 m-4  ">
          <button className="bg-buttonbackground/50 px-4 py-1 mb-4 rounded-lg text-customWhite/90">
            Download
          </button>
          <h3 className="text-5xl font-bold mb-4 mobile:text-xl ">Download Rentcars App for <span className="text-buttonbackground/60">FREE</span></h3>
          <p className="text-lg mb-4">For faster,easier and exclusive deals.</p>

          <div className="flex space-x-5 ">
            <img src={GooglePlay} alt="" />
            <img src={AppStore} alt="" />
          </div>
        </div>

        <div>
          <img src={iphone} alt="" className="w-[400px]" />
        </div>
      </div>

      <FooterSection />
    </div>
    </div>
  );
};

export default EndingPage;
