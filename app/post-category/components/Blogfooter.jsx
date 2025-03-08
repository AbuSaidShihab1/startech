import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaBehance } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
const posts = [
  {
    title: "Exquisite Admitting Cordially September Newspaper",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    category: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "No Projection Reference Reasonably Delightful Celebrated",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    category: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "Another Sample Post",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg",
    category: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "Yet Another Sample Post",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    category: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
];

const PostCard = ({ title, image, category, date }) => (
  <div className="flex  text-white  rounded-lg mb-4">
    <img src={image} alt={title} className="w-24 h-full object-cover mr-4" />
    <div>
      <h3 className="text-[13px] hover:text-red-500 font-[400] cursor-pointer">{title}</h3>
      <div className="flex items-center text-sm text-gray-400 mt-2">
        <FaUser className="mr-1" /> {category}
        <FaCalendarAlt className="ml-4 mr-1" /> {date}
      </div>
    </div>
  </div>
);

const Blogfooter = () => {
  return (
    <div className="bg-[#222222] text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 xl:gap-8 px-5 py-8">
        {["FEATURED POSTS", "RECENT POSTS", "RECENT IN SPORTS"].map((section, index) => (
          <div key={index}>
            <h2 className="text-[13px] font-bold mb-2">{section}</h2>
            <div className="w-full h-[3px] bg-gray-700 mb-[10px]">
              <div className="w-[20%] h-[3px] bg-[#e74c3c]"></div>
            </div>
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-between  bg-[#1a1a1a] text-white px-5 h-[40px] text-xs">
      <p className="font-semibold">
        Created By <span className="text-pink-500">SoraTemplates</span>
      </p>

      <div className="flex space-x-2 ">
        <button className="bg-[#333] p-2 ">
          <FaFacebookF className="text-white text-sm" />
        </button>
        <button className="bg-[#333] p-2">
          <FaTwitter className="text-white text-sm" />
        </button>
        <button className="bg-[#333] p-2">
          <FaDribbble className="text-white text-sm" />
        </button>
        <button className="bg-[#333] p-2">
          <FaInstagram className="text-white text-sm" />
        </button>
        <button className="bg-[#333] p-2">
          <FaBehance className="text-white text-sm" />
        </button>
        <button className="bg-[#333] p-2">
          <IoIosArrowUp className="text-white text-sm" />
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default Blogfooter;
