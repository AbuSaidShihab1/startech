"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FormImage = [
  "https://www.startech.com.bd/image/cache/catalog/home/banner/2025/web-banner-982x500.webp", // Custom uploaded image
  "https://www.startech.com.bd/image/cache/catalog/home/offer-banner-982x500.webp",
  "https://www.startech.com.bd/image/cache/catalog/home/banner/2025/mobile-fest-banner-2025-982x500.webp",
];

export default function CustomSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FormImage.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + FormImage.length) % FormImage.length);
  };

  return (
<section className="flex flex-col lg:flex-row justify-center px-[15px] mx-auto w-full xl:max-w-[1300px] py-[15px] xl:py-[30px] gap-[18px] xl:gap-[30px] items-stretch">
  {/* Image Slider Section */}
  <section className="w-[100%] lg:w-[75%] h-full relative overflow-hidden bg-white flex flex-col">
    <img className="w-full h-auto flex-1" src={FormImage[currentIndex]} alt="slider-image" />
    {/* Navigation Indicators */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {FormImage.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-6 cursor-pointer ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </section>

  {/* Compare Products Section */}
  <section className="font-jost w-[100%] lg:w-[25%] h-full flex flex-col">
    <div className="w-full h-full px-[20px] py-[20px] bg-[#FFE8A1] flex flex-col">
      <h4 className="text-[18px] font-[600] text-center">Compare Products</h4>
      <p className="text-[#666666] text-[15px] text-center">Choose Two Products to Compare</p>
      <div className="flex flex-col space-y-2 items-center mt-4 flex-1">
        <div className="relative w-[100%]">
          <input type="text" placeholder="Search and Select Product" className="w-full px-4 py-2 border border-gray-300 rounded" />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
        <div className="relative w-[100%]">
          <input type="text" placeholder="Search and Select Product" className="w-full px-4 py-2 border border-gray-300 rounded" />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
        <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
          View Comparison
        </button>
      </div>
    </div>
    <div className="mt-4 flex-1">
      <img className="w-full h-full object-cover" src="https://www.startech.com.bd/image/catalog/home/banner/2025/ac-ton-calculator.webp" alt="Laptop Finder Ad" />
    </div>
  </section>
</section>

  );
}
