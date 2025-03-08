import React from "react";
import { FaPlay, FaRss } from "react-icons/fa";
import {FaUser } from "react-icons/fa";

const videos = [
  {
    title: "No Projection Reference Reasonably Delightful Celebrated",
    author: "Sora Blogging Tips",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9GGWte21w3i0ytgnVDYCZoRC0q1LQBQ1gQGnAmuBcPs6Y6E5FrxWhtLFUzxnzlY4maO8tBbvenFsfWeX5PGqJg2a-zKXE9puVo7wa8RVPGpXv5_aMInEk028Kv6DD4Dsypsxf_xbcv1Ys/s1600/12.jpg",
  },
  {
    title: "No Projection Reference Reasonably Delightful Celebrated",
    author: "Sora Blogging Tips",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf-bHDQcqcQUKcjwKHNCHTQ9xNMWyukiLYA2wNaUo5v4yDP5PHqNyvB_Zfl8FdXnFmcy-2bzi1nwQK5vay_1iaJVo4sj11-YGnQJ9ffTc25LlaOWchxAGB5zKqM9splxlX_rF-VPkMmRmk/s1600/9.jpg",
  },
  {
    title: "Particular Way The Roughly Affected Project Favourable",
    author: "Sora Blogging Tips",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
  },
];

const VideoGallery = () => {
  return (
    <div className="py-[20px]">
            <div className="flex items-center justify-between bg-[#1a1a1a] text-white h-[40px]">
      {/* Left Section with Icon */}
      <div className="flex justify-start items-center gap-[10px] h-[40px]">
      <div className="flex items-center bg-[#e74c3c] px-3 h-full">
        <FaRss className="text-white text-lg" />
      </div>

      {/* Middle Text */}
      <div className="flex-1 text-center uppercase font-bold text-xs tracking-wider">
      Recent Posts
      </div>
      </div>

      {/* Right Section with Button */}
      <button className="flex justify-center items-center hover:bg-brand_color2 transition-all duration-150  text-xs tracking-wider px-[10px] h-[40px] bg-gray-800">
        VIEW MORE
      </button>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[20px] bg-[#222222] p-[10px]">
        {videos.map((video, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h3 className="text-sm font-semibold">{video.title}</h3>
              <div className="flex justify-start items-center mt-2 text-gray-100">
              <FaUser className="mr-1 text-[12px]" />
              <p className="text-xs opacity-80">{video.author}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 text-white text-lg bg-black bg-opacity-50 p-2 rounded-full">
              <FaPlay />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
