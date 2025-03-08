import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Allpost from "./bleftside/Allpost";
import VideoGallery from "./bleftside/VideoGallery";
import BlogLayout from "./bleftside/BlogLayout";
import Gallery from "./bleftside/Gallery";
import { FaRss } from "react-icons/fa";
const posts = [
  {
    title: "She Alteration Everything Sympathize Impossible",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
  },
  {
    title: "Whether Article Spirits",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
  },
  {
    title: "She Alteration Everything Sympathize Impossible",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg",
  },
  {
    title: "Exquisite Admitting Cordially September Newspaper",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
  },
];

const Blogleftside = () => {
  return (
    <div className="w-full lg:w-[70%] py-4">
    <section>
          {/* Header */}
          <div className="flex items-center justify-between bg-[#1a1a1a] text-white h-[40px]">
      {/* Left Section with Icon */}
      <div className="flex justify-start items-center gap-[10px] h-[40px]">
      <div className="flex items-center bg-brand_color2 px-3 h-full">
        <FaRss className="text-white text-lg" />
      </div>

      {/* Middle Text */}
      <div className="flex-1 text-center font-bold text-xs tracking-wider">
        FEAT
      </div>
      </div>

      {/* Right Section with Button */}
      <button className="flex justify-center items-center hover:bg-brand_color2 transition-all duration-150 text-xs tracking-wider px-[10px] h-[40px] bg-gray-800">
        VIEW MORE
      </button>
    </div>

      <div className="flex justify-center lg:flex-row flex-col  gap-[20px] mt-4 ">
        {/* Left Side: Featured Post */}
        <div className="w-full lg:w-[45%] relative flex flex-col ">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Ay6myMmaOomlLVlMpz8P1_J5IR65hvm2SImsH1Hy9ivHOKRoBWW5AEudImj9Xht1qaZQ-FpfRx0eQ2Qw2QJ9lzyeYwjW0qTsTmBdGDg48457K1CNVkFjga-Aq0AjQAjOjnb2U48Zdz1i/s1600/65.jpg"
            alt="Featured Post"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-red-500 px-2 py-1 text-xs uppercase">Beauty</span>
            <h2 className="text-lg font-bold mt-2">Melancholy Middletons Yet Understood Decisively</h2>
            <div className="text-sm flex items-center mt-1">
              <span>Sora Blogging Tips</span>
              <FaRegCalendarAlt className="ml-2" />
              <span className="ml-1">Dec 05, 2015</span>
            </div>
          </div>
        </div>

        {/* Right Side: Post List */}
        <div className="w-full lg:w-[55%] flex flex-col space-y-4 h-full justify-between">
          {posts.map((post, index) => (
            <div key={index} className="flex  space-x-3">
              <img src={post.image} alt={post.title} className="w-20 h-16 object-cover" />
              <div className="">
                <h3 className="text-sm font-bold">{post.title}</h3>
                <div className="text-xs text-gray-500 flex items-center">
                  <span>{post.author}</span>
                  <FaRegCalendarAlt className="ml-2" />
                  <span className="ml-1">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Allpost/>
    <VideoGallery/>
    <BlogLayout/>
    <Gallery/>
    </div>
  );
};

export default Blogleftside;
