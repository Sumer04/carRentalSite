import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className=" carrr border border-red-500 h-[380px] shadow-xl p-4 rounded mobile:mb-8 ">
      <div className="">
        <div className="flex justify-center ">
          <img src={car.img} alt="" className="w-[100px]" />
        </div>

        <div className="py-8 ">
          <h3 className="font-bold py-1 text-sm">{car.name}</h3>
          <div className="flex">
            <StarIcon style={{ color: "grey" }} />
            <p className="text-sm">{car.description}</p>
          </div>
          <div className="flex justify-between space-x-4 py-">
            <div className="py-1">
              <p className="text-sm">
                <PersonIcon />
                {car.user}
              </p>
              <p className="text-sm">
                <AcUnitIcon />
                {car.ac}
              </p>
            </div>
            <div className="py-1">
              <p className="text-sm">
                <InsightsIcon />
                {car.auto}
              </p>
              <p className="text-sm">
                <NoMeetingRoomIcon />
                {car.door}
              </p>
            </div>
          </div>
          <hr className="bg-gray-400 border-[1px]" />
          <div className="flex  justify-between py-1 ">
            <p className="text-sm">{car.price}</p>
            <p className="text-sm">{car.amount}</p>
          </div>
          <Link to="/book">
          <button className="BTN bg-customBlue w-full py-1 px-1 rounded-lg text-customWhite">
            Rent Now
            <ArrowForwardIcon />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
