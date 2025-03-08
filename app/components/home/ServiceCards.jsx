"use client";

import React from "react";
import { FaLaptop, FaExclamationCircle, FaQuestionCircle, FaTools } from "react-icons/fa";

const services = [
  { icon: <FaLaptop />, title: "Laptop Finder", description: "Find Your Laptop Easily" },
  { icon: <FaExclamationCircle />, title: "Raise a Complaint", description: "Share your experience" },
  { icon: <FaQuestionCircle />, title: "Online Support", description: "Get Online Support" },
  { icon: <FaTools />, title: "Servicing Center", description: "Repair Your Device" },
];

const ServiceCards = () => {
  return (
    <section className="mx-auto w-full xl:max-w-[1300px] font-jost px-[15px]  pb-[20px]">
        <div className="w-full px-[20px] py-[7px] flex justify-center items-center rounded-full bg-white">
        <marquee>4rd February, Tuesday, all outlets are open except Multiplan Branch. Additionally, our online activities are open and operational.
        </marquee>
      </div>
   <div className=" py-[30px]  grid grid-cols-2 lg:grid-cols-4 gap-[15px] xl:gap-[30px]">
      {services.map((service, index) => (
        <div key={index} className="flex items-center bg-white shadow-md rounded-[5px] px-2 xl:px-6 py-4">
          <div className="bg-icon_color text-white p-[10px] md:p-[15px] xl:p-[20px] rounded-full text-[18px] md:text-xl">
            {service.icon}
          </div>
          <div className="ml-4">
            <h4 className="text-[13px] md:text-[15px] xl:text-lg font-semibold">{service.title}</h4>
            <p className="lg:flex hidden text-gray-500 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </section>
 
  );
};

export default ServiceCards;
