import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThreePIcon from "@mui/icons-material/ThreeP";
import Audii from "../assets/Audii.png";
import { colors } from "@mui/material";

export const data = [
  {
    icon: PaidIcon,
    title: "Best price guaranteed",
    description: "Find a lower price? we'll refund you 100% of the difference.",
  },
  {
    icon: PersonIcon,
    title: "Experienced driver",
    description:
      "Don't have a driver? Don't worry, we have many experienced drivers for you.",
  },
  {
    icon: CalendarMonthIcon,
    title: "24 hour car delivery",
    description: "Book your car anytime and we will deliver it directly to you.",
  },
  {
    icon: ThreePIcon,
    title: "24/7 technical support",
    description:
      "Have a question? Contact Rentcars support any time when you have a problem.",
  },
];

const ChooseUs = () => {
  return (
 <div className="flex justify-center">
     <div className="w-[1200px]">
      <hr className="border-gray-400 border-1 my-10 w-full mobile:w-[420px]"/>

    <div className="Chooseus flex justify-between  p-10 ">
      
        <div className="py-12">

      <img className="imageSizee" src={Audii} alt="Audi car" />
        </div>
      <div className="Chooseus">
        <div>
          <div className="">
            <button className="bg-blue-100/50 text-customBlue px-4 py-1 rounded-md">
              WHY CHOOSE US
            </button>
          </div>
          <p className= "offer text-gray-600/80 font-bold text-4xl">We offer the best experience with our rental deals</p>
        </div>
        <div className="p-4">
        {data.map((item, index) => (
          <div
          key={index}
          className=" Choodeus flex  items-start space-x-8 "
          >
            <div className="bg-blue-100/50 p-2 rounded-md">
              <item.icon className="text-2xl" style={{ color: colors.blue[500] }}/>
            </div>
            <div>
              <h3 className=" font-size1 font-bold text-xl mb-1 ">{item.title}</h3>
              <p className=" font-size1 text-lg mb-1">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
      </div>
    
    </div>
        </div>
 </div>
  );
};

export default ChooseUs;
