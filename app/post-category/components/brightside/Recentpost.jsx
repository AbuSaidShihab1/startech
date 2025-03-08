import React from "react";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";

const posts = [
  {
    title: "Celebrated am announcing delightful remarkably we",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "Melancholy Middletons Yet Understood Decisively",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "She Alteration Everything Sympathize Impossible",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
  {
    title: "Whether Article Spirits",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    author: "Sora Blogging Tips",
    date: "Dec 05, 2015",
  },
];

const Recentpost = () => {
  return (
    <div className="w-full">
      <div className=" text-white flex">
        <button className="w-1/2 bg-red-500 font-[600] h-[35px]  px-[10px] text-[12px] text-[#eee]">RECENT POSTS</button>
        <button className="w-1/2 bg-black font-[600] h-[35px] text-center  px-[10px] text-[12px] text-[#eee]">COMMENTS</button>
      </div>
      <div className="bg-white  py-4">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-2 border-b pb-2 mb-2">
            <img src={post.image} alt={post.title} className="w-16 h-16 object-cover" />
            <div>
              <h3 className="text-sm font-bold">{post.title}</h3>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                <FaRegUser /> {post.author} <FaRegCalendarAlt /> {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start items-center px-[10px] text-[12px] text-[#eee]">SUBSCRIBE US</h2>
      <div className="mt-2">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/E8lXC2mR6-k?si=mHPj5h6HRNAvOsWD"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start items-center px-[10px] text-[12px] text-[#eee] mt-[10px]">FACEBOOK</h2>
    </div>
  );
};

export default Recentpost;
