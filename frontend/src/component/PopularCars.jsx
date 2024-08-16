import React from "react";
import jaguar from "../assets/jaguar.png";
import Audi from "../assets/Audi.png";
import BMW from "../assets/BMW.png";
import lamborghini from "../assets/Lamborghini.png";
import CarCard from "./CarCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const data = [
  {
    img: jaguar, // Placeholder for image data
    name: "Jaguar XE L P250",
    description: "4.8 (2,436 reviews)",
    user: "4 Passengers",
    ac: "Air Conditioning",
    auto: "auto",
    door: "4 Door",
    price: "Price",
    amount: "$1,800/day",
  },

  {
    img: Audi, // Placeholder for image data
    name: "Audi R8",
    description: "4.6 (1,936 reviews)",
    user: "2 Passengers",
    ac: "Air Conditioning",
    auto: "auto",
    door: "2 Door",
    price: "Price",
    amount: "$2,100/day",
  },
  {
    img: BMW, // Placeholder for image data
    name: "BMW M3",
    description: "4.5(2,036 reviews)",
    user: "4 Passengers",
    ac: "Air Conditioning",
    auto: "auto",
    door: "4 Door",
    price: "Price",
    amount: "$1,600/day",
  },
  {
    img: lamborghini, // Placeholder for image data
    name: "Lamborghini Huracan",
    description: "4.3 (2,236 reviews)",
    user: "2 Passengers",
    ac: "Air Conditioning",
    auto: "auto",
    door: "2 Door",
    price: "Price",
    amount: "$2,300/day",
  },
];

const PopularCars = () => {
  return (
<div className="flex justify-center">
<div className="w-[1200px]">
      <hr className="border-gray-400 border-1 my-8 w-full mobile:w-[420px]"/>

      <div className="flex flex-col items-center  ">
        <button className="Btn bg-blue-100/40 px-4 py-1 rounded-md text-customBlue mb-4">POPULAR RENTAL DEALS</button>
        <p className="text font-bold text-4xl mb-4  ">Most popular cars rental deals</p>
      </div>

      <div className=" carcomponent   flex justify-between p-10 ">
        {data.map((car, index) => (
          <CarCard key={index} car={car} className="" />
        ))}
      </div>
      <div className="flex items-center justify-center ">
      <button className="  text-gray-800 bg-transparent border border-slate-400 rounded-md py-1 px-4">Show all vehicles<ArrowForwardIcon/></button>
        
      </div>
     

    </div>
</div>
  );
};

export default PopularCars;
