// import React from 'react'
// import { RiInstagramFill } from 'react-icons/ri'
// import { ImFacebook2 } from 'react-icons/im'
// import { BsLinkedin } from 'react-icons/bs'

// const FooterSection = () => {
//     return (
//         // <>
//         //     <footer className="h-[306px] bg-gradient-to-t from-[#F4F4F5] via-[#F4F4F5] to-[#F4F4F5] px-24 py-12 dark:from-[#1F2937] dark:via-[#1F2937] dark:to-[#1F2937] dark:text-white">
//         //         <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
//         //             <div className="flex w-full flex-col space-y-4 md:w-1/2 lg:w-1/3">
//         //                 <h2 className="text-left text-4xl font-bold">Logo.</h2>
//         //                 <p className="w-[308px] pt-8 text-left text-sm">
//         //                     Enhance your social media presence with customizable templates. Join now and transform your content!
//         //                 </p>
//         //                 <div className="flex items-center space-x-8 pt-6">
//         //                     <Button className="h-[33px] w-[114px] rounded-md bg-white text-black hover:bg-slate-100">Get in touch</Button>
//         //                     <div className="flex cursor-pointer items-center space-x-4">
//         //                         <RiInstagramFill className="text-2xl"></RiInstagramFill>
//         //                         <ImFacebook2 className="text-xl"></ImFacebook2>
//         //                         <BsLinkedin className="text-xl"></BsLinkedin>
//         //                     </div>
//         //                 </div>
//         //             </div>

//         //             <div className="flex flex-col space-y-3 pl-32 text-left">
//         //                 <h2 className="text-md font-bold">How to reach us?</h2>
//         //                 <h2 className="text-sm font-bold">Email:</h2>
//         //                 <p className="text-sm">marketingtool9@gmail.com</p>
//         //                 <h2 className="text-sm font-bold">Phone:</h2>
//         //                 <p className="text-sm ">+1 (332) 777-4226</p>
//         //                 <h2 className="text-sm font-bold">Address:</h2>
//         //                 <p className="text-sm">Jaipur (Rajasthan)</p>
//         //             </div>

//         //             <div className="flex flex-col space-y-4 text-left">
//         //                 <h2 className="text-md font-bold">Pages</h2>
//         //                 <ul className="space-y-3 text-sm">
//         //                     <li>
//         //                         <a href="/home" className="hover:underline">
//         //                             Home
//         //                         </a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="/team" className="hover:underline">
//         //                             Our Team
//         //                         </a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="/contact" className="hover:underline">
//         //                             Contact Us
//         //                         </a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="/help" className="hover:underline">
//         //                             Help
//         //                         </a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="/terms" className="hover:underline">
//         //                             Terms of use
//         //                         </a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="/policy" className="hover:underline">
//         //                             Privacy Policy
//         //                         </a>
//         //                     </li>
//         //                 </ul>
//         //             </div>
//         //         </div>
//         //     </footer>
//         //     <div className="h-[57px] items-center py-4 text-center text-[#9CA3B0]">
//         //         <p className="text-sm">&quot;© 2024 Marketing Tool All Rights Reserved.&quot;</p>
//         //     </div>
//         // </>

//         AC
//     )
// }

// export default FooterSection
import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="bg-custombackground text-white/60 p-10 mobile:w-[450px]">
      <div className="flex justify-between p-2">
        <div className="footerrr flex flex-col">
          <Link to="/path-two">RENTCARS</Link>
          <Link to="/path-three">25566 Hc 1, Glenallen Alaska, 99588, USA</Link>
          <Link to="">+603 4784 273 12</Link>
          <Link to="">rentcars@gmai.com</Link>
        </div>
        <div className="hidden md:flex flex-col">
          <Link to="/path-two">Our Product</Link>
          <Link to="/path-three">Career</Link>
          <Link to="">Car</Link>
          <Link to="">Packages</Link>
          <Link to="">Features</Link>
          <Link to="">Priceline</Link>
        </div>
        <div className="hidden md:flex flex-col">
          <Link to="">Resources</Link>
          <Link to="">Help Centre</Link>
          <Link to="">Guides</Link>
          <Link to="">Partner Network</Link>
          <Link to="">Cruises</Link>
          <Link to="">Developer</Link>
          <Link to="">Download</Link>
        </div>
        <div className="hidden md:flex flex-col">
          <Link to="">About Rentcars</Link>
          <Link to="">Why choose us</Link>
          <Link to="">Our Story</Link>
          <Link to="">Investor Relations</Link>
          <Link to="">Press Center</Link>
          <Link to="">Advertise</Link>
        </div>
      </div>
      <hr className="bg-horizontal border-t border-gray-300 w-full mb-2 mobile:justify-center " />
      <p className="footer ">Copyright 2023. Rentcars, All Rights Reserved</p>
    </div>
  );
};

export default FooterSection;

