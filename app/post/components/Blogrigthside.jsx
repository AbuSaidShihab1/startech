"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaRss } from "react-icons/fa";
import Recentpost from "./brightside/Recentpost";
import CategoriesTags from "./brightside/CategoriesTags";

const socialStats = [
  { icon: <FaFacebookF className='text-white text-2xl' />, count: "3.5k", label: "Likes", bg: "bg-blue-600" },
  { icon: <FaTwitter className='text-white text-2xl' />, count: "1.7k", label: "Followers", bg: "bg-sky-500" },
  { icon: <FaYoutube className='text-white text-2xl' />, count: "2.8k", label: "Subscribers", bg: "bg-red-600" },
  { icon: <FaPinterest className='text-white text-2xl' />, count: "524", label: "Followers", bg: "bg-red-500" },
  { icon: <FaInstagram className='text-white text-2xl' />, count: "849", label: "Followers", bg: "bg-pink-500" },
  { icon: <FaRss className='text-white text-2xl' />, count: "286", label: "Subscribers", bg: "bg-yellow-500" }
];

const popularPosts = [
  { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg", title: "Applauded Use Attempted Strangers Now Are Middleton" },
  { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg", title: "Certainty Determine At Of Arranging Perceived Situation" },
  { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg", title: "Melancholy Middletons Yet Understood Decisively" },
  { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Ay6myMmaOomlLVlMpz8P1_J5IR65hvm2SImsH1Hy9ivHOKRoBWW5AEudImj9Xht1qaZQ-FpfRx0eQ2Qw2QJ9lzyeYwjW0qTsTmBdGDg48457K1CNVkFjga-Aq0AjQAjOjnb2U48Zdz1i/s1600/65.jpg", title: "She Alteration Everything Sympathize Impossible" }
];

const Blogrigthside = () => {
  return (
    <aside className="w-full lg:w-[30%] py-4 lg:p-4 space-y-6">
   <section>
       {/* Social Counter */}
       <div className=" text-white">
        <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start items-center px-[10px] text-[12px] text-[#eee]">SOCIAL COUNTER</h2>
        <div className="grid grid-cols-2 gap-2 mt-3 mb-[10px]">
          {socialStats.map((item, index) => (
            <div key={index} className={`flex items-center py-[5px]  rounded-md`}> 
              <div className={`flex justify-center items-center ${item.bg} w-[35px] h-[36px] `}><span className="text-[15px]">{item.icon}</span></div>
              <div className="ml-3">
                <p className="text-lg font-bold text-gray-700">{item.count}</p>
                <p className="text-sm opacity-75 text-gray-800">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popular Posts */}
      <div className="">
      <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start items-center px-[10px] uppercase text-[12px] text-[#eee]">POPULAR POST</h2>
        <div className="mt-3 space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex  space-x-3 pb-[10px] border-b-[1px] border-gray-100">
              <img src={post.img} alt="" className="w-20 h-16 object-cover" />
              <h1 className="text-sm font-medium leading-tight">{post.title}</h1>
            </div>
          ))}
        </div>
      </div>
   </section>


   <Recentpost/>
   <CategoriesTags/>
    </aside>
  );
};

export default Blogrigthside;
