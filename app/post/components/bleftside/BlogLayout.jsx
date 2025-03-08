import React from "react";
import { FaRss, FaUser, FaCalendarAlt } from "react-icons/fa";

const articles = [
  {
    category: "Culture",
    title: "Celebrated am announcing delightful remarkably we",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg"
  },
  {
    category: "Sports",
    title: "Applauded Use Attempted Strangers Now Are Middleton",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg"
  }
];

const smallArticles = [
  {
    id:1,
    title:"Whether Article Spirits",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    author:"Sora Blogging Tips",
    date:"Dec 05, 2015"
  },
  {
    id:2,
    title:"Exquisite Admitting Cordially September Newspaper",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    author:"Sora Blogging Tips",
    date:"Dec 05, 2015"
  },
  {
    id:3,
    title:"Particular Way The Roughly Affected Project Favourable",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    author:"Sora Blogging Tips",
    date:"Dec 05, 2015"
  },
];

const BlogColumn = ({ title, mainArticle, smallArticles }) => {
  return (
    <div className="w-full md:w-1/2">
       <div className="flex items-center justify-between bg-[#1a1a1a] text-white h-[40px]">
      {/* Left Section with Icon */}
      <div className="flex justify-start items-center gap-[10px] h-[40px]">
      <div className="flex items-center bg-[#e74c3c] px-3 h-full">
        <FaRss className="text-white text-lg" />
      </div>

      {/* Middle Text */}
      <div className="flex-1 text-center uppercase font-bold text-xs tracking-wider">
      {title}
      </div>
      </div>

      {/* Right Section with Button */}
      <button className="flex justify-center items-center text-xs tracking-wider px-[10px] h-[40px] bg-gray-800">
        VIEW MORE
      </button>
    </div>
      <div className="relative mt-2 ">
        <div className="bg-black bg-opacity-20 w-full h-full absolute top-0 left-0 z-[100]">

        </div>
        <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0  p-4 text-white">
          <span className="bg-red-500 text-white px-2 py-1 text-xs">{mainArticle.category}</span>
          <h3 className="text-lg font-bold mt-2">{mainArticle.title}</h3>
          <div className="flex items-center text-xs gap-2 mt-1">
            <FaUser /> Sora Blogging Tips <FaCalendarAlt /> Dec 05, 2015
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {smallArticles.map((article, index) => (
          <div key={index} className="flex  gap-3 border-b pb-2">
            <div className="w-20 h-16 bg-gray-300">
              <img src={article.image} className="h-full w-20" alt="" />
            </div>
            <div>
              <h4 className="text-sm font-semibold">{article.title}</h4>
              <div className="text-xs text-gray-400 flex items-center mt-1 gap-2">
                <FaUser /> {article.author} <FaCalendarAlt /> {article.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogLayout = () => {
  return (
    <div className="flex  gap-[20px]">
      <BlogColumn title="COLUMN LEFT" mainArticle={articles[0]} smallArticles={smallArticles} />
      <BlogColumn title="COLUMN RIGHT" mainArticle={articles[1]} smallArticles={smallArticles} />
    </div>
  );
};

export default BlogLayout;
