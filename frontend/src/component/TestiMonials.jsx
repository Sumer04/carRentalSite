import React from "react";
import Slider from "react-slick";
import Frame from "../assets/Frame.png";
import Rectangle from "../assets/Rectangle.png";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const data = [
  {
    img: Frame,
    title: "5.0 stars",
    description:
      "I feel very secure when using caretail's service. Your customer care team is very enthusiastic and the driver is always on time.",
    name: "Charlie"
  },
  {
    img: Rectangle,
    title: "5.0 stars",
    description:
      "I feel very secure when using caretail's service. Your customer care team is very enthusiastic and the driver is always on time.",
    name: "Charlie"
  },
  {
    img: Rectangle,
    title: "5.0 stars",
    description:
      "I feel very secure when using caretail's service. Your customer care team is very enthusiastic and the driver is always on time.",
    name: "Charlie"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <hr className="border-gray-400 border-1 my-8 w-full mobile:w-[420px] "/>

    <div className="bg-testimonial py-20">
      <div className="flex flex-col items-center text-xl mb-8">
        <button className="font-bold text-3xl bg-customBlue/70 py-1 px-4 rounded-md text-customWhite mb-4">Testimonials</button>
        <p className="text-4xl mobile:text-2xl">What people say about us ?</p>
      </div>
      <Slider {...settings} className="w-full mobile:w-[430px]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center shadow-xl">
            <div className="m-3  rounded-lg">
              <div className="rounded-t-xl flex justify-center items-center">
                <img src={item.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4  bg-gray-800 text-white">
                <h3 className="text-xl">{item.title}</h3>
                <div className="flex">
                  {[...Array(5)].map((i, value) => {
                    return <FaStar key={value} />;
                  })}
                </div>
                <p className="text-lg">{item.description}</p>
                <h3 className="text-md">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Testimonials;
