import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Allpost from "./bleftside/Allpost";
import VideoGallery from "./bleftside/VideoGallery";
import BlogLayout from "./bleftside/BlogLayout";
import Gallery from "./bleftside/Gallery";
import { FaRss } from "react-icons/fa";
import BlogArticle from "./BlogArticle";
import { FaHeart } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CommentSection from "./comments/CommentSection";
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
const blogPosts = [
  {
    id: 1,
    category: "CULTURE",
    title: "Celebrated am announcing delightful remarkably we",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg"
  },
  {
    id: 2,
    category: "BEAUTY",
    title: "Whether Article Spirits",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg"
  },
  {
    id: 3,
    category: "BEAUTY",
    title: "Exquisite Admitting Cordially September Newspaper",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg"
  }
];

const Blogleftside = () => {
  return (
    <div className="w-full lg:w-[70%] py-4">
    <section>
      <BlogArticle/>
    </section>

<div className="flex gap-4 lg:flex-row flex-col bg-gray-900 p-2 lg:p-4 overflow-hidden">
      {blogPosts.map((post) => (
     <div
     key={post.id}
     className="relative w-full lg:w-1/3 overflow-hidden shadow-lg"
   >
     <img
       src={post.image}
       alt={post.title}
       className="w-full h-48 object-cover brightness-75"
     />
       <div className="absolute bottom-0 left-0  p-4 text-white">
          <span className="bg-brand_color2 text-white px-2 py-1 text-xs ">{post.category}</span>
          <h3 className="text-[17px] 2xl:text-lg font-[600] mt-2">{post.title}</h3>
      
        </div>
   </div>
   
      ))}
    </div>
{/* -------------------third-part-------------------- */}
<div className="flex justify-between  border-t-[2px] border-b-[2px] border-gray-200 items-center my-[20px] px-[15px] text-gray-900 text-sm">
      {/* Previous Button */}
      <div className=" border-r-[1px] py-[20px] border-gray-200 w-[50%]">
        <p className="font-bold uppercase">Previous</p>
        <p className="text-gray-700 mt-[10px]">She Alteration Everything Sympathize Impossible</p>

      </div>
      
      {/* Next Button */}
      <div className=" gap-2 text-right  py-[20px] w-[50%]">
      <p className="font-bold uppercase">Next</p>

        <p className="text-gray-700 mt-[10px]">She Alteration Everything Sympathize Impossible</p>
      </div>
    </div>
{/* -------------third-part----------------------------- */}
    </div>
  );
};

export default Blogleftside;
