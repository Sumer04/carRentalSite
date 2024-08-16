import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DatePicker from "react-datepicker";
const Searchbar = () => {
  const [pickupDate, setPickupDate] = useState(1);
  const [returnDate, SetReturnDate] = useState(1);
  return (
    <div className="flex justify-between  py-2  shadow-xl mx-20 rounded-md SearchBar" >
      <div className="flex items-center mx-5 Pickup ">
        <LocationOnIcon />
        <div>
          <h1 className="font-bold">Location</h1>
          <p className="text-gray-400">Search your location</p>
        </div>
      </div>
      <div className="flex items-center  space-x-2 Pickup">
        <CalendarMonthIcon />
        <div className="Pickup">
          <h1 className="font-bold">Pickup date </h1>
          <DatePicker className="text-gray-400"
            selected={pickupDate}
            onchange={(date) => setPickupDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholder="select pickuyp date"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 Pickup">
     

      
        <CalendarMonthIcon />
        <div>

          <h1 className="font-bold">Return date</h1>
          <DatePicker className="text-gray-400"
            selected={returnDate}
            onchange={(date) => SetReturnDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholder="select return  date"
          />
        </div>
     
        <div className="Pickup px-4"> <button className="bg-customBlue/100 rounded-md px-8 py-1  text-customWhite ">Search</button></div>
        
      </div>
    </div>
  );
};

export default Searchbar;
