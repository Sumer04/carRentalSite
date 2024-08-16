import React from "react";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import volvo from "../assets/volvo.png";
import Ac from "../assets/Ac.png";
import jjaguar from "../assets/gaguar.png"
import oddy from "../assets/oddy.png";

import nisaan from "../assets/Nissan.png";

import Honda from "../assets/Honda.png";

export const data = [
  {
    Icon: WhereToVoteIcon,
    title: "Choose location",
    description: "Choose your and find your best car",
  },
  {
    Icon: CalendarMonthIcon,
    title: "Pick-up date",
    description: "Select your pick up date and time to book your car",
  },
  {
    Icon: DirectionsCarIcon,
    title: "Book your car",
    description: "Book your car and we will deliver it directly to you",
  },
];

const WorkingStep = () => {
  return (
  <div className="flex justify-center">
      <div className="flex flex-col w-[1200px]">
      <hr className="border-gray-400 border-1 my-8 w-full mobile:w-[420px] "/>
      <div className=" work flex flex-col items-center py-20">
        <div className="text-center mb-10">
          <button className="ml-4 bg-blue-200/50 py-1 px-4 text-blue-400 rounded-md mb-4">
            HOW IT WORKS
          </button>
          <p className=" font-Size font-bold text-4xl mb-6">
            Rent with the following 3 working steps
          </p>
        </div>
        <div className="work flex justify-center gap-8">
          {data.map((work, index) => (
            <div key={index} className=" flex flex-col items-center">
              <div className="bg-blue-200/30 p-10 rounded-xl mb-4">
                <work.Icon style={{ fontSize: "42px", color: "blue" }} />
              </div>
              <h3 className="font-bold text-xl mb-2">{work.title}</h3>
              <p className="text-center w-[161px] text-sm">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  imageSize mobile:space-x-5 ">
        <img className=""src={Honda} alt="" />
        <img className="" src={jjaguar} alt="" />

        <img className ="" src={nisaan} alt="" />

        <img className=""src={volvo} alt="" />

        <img className="" src={oddy} alt="" />

        <img className=""src={Ac} alt="" />
      </div>
    </div>
  </div>
  );
};

export default WorkingStep;
