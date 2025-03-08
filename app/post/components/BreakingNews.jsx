import { FaNewspaper } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { TiPin } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
const BreakingNews = () => {
  const newsImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg"
  ];

  return (
    <div className="flex items-center  text-white bg-[#F7F7F7] h-[40px] ">
      <div className="flex items-center bg-[#222222] h-[40px] border-[1px] border-[#222222] py-[10px] space-x-2 px-2">
        <TiPin className="text-[22px]" />
        <span className="font-[400] text-[14px] text-nowrap uppercase">Breaking News</span>
      </div>
      <div className="w-full overflow-hidden border-t-[1px] h-[40px] p-[4px] flex justify-center items-center border-b-[1px] border-r-[1px] border-[#eee]">
        <Marquee>
          {newsImages.map((img, index) => (
           <div className="flex items-center p-2 w-full ml-[20px]">
           {/* Left Image */}
           <img src={img} alt="news" className="w-[40px] h-[30px]" />
     
           {/* Category Label */}
           <div className="bg-[#e74c3c] text-white text-xs font-[400] text-[10px] px-2 py-1  rounded-[2px] flex ml-[10px] items-center">
             <FaBook className="mr-1" />
             CULTURE
           </div>
     
           {/* Marquee Text */}
           <a href="#" className="text-[#222222]">
           <p className="ml-2 text-sm font-medium text-gray-800">
             Celebrated am announcing delightful remarkably.
           </p>
           </a>
         </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
