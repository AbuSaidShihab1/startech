"use client"
import { useState } from "react";
import { FaHeart, FaUser, FaClock } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const posts = [
  {
    id: 1,
    category: "CULTURE",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    title: "Celebrated am announcing delightful remarkably we",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 2,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    title: "Melancholy Middletons Yet Understood Decisively",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 3,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    title: "She Alteration Everything Sympathize Impossible",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 4,
    category: "CULTURE",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    title: "Celebrated am announcing delightful remarkably we",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 5,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    title: "Melancholy Middletons Yet Understood Decisively",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 6,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    title: "She Alteration Everything Sympathize Impossible",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 7,
    category: "CULTURE",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    title: "Celebrated am announcing delightful remarkably we",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 8,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    title: "Melancholy Middletons Yet Understood Decisively",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  },
  {
    id: 9,
    category: "BEAUTY",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    title: "She Alteration Everything Sympathize Impossible",
    author: "Sora Blogging Tips",
    date: "9 years ago",
    content: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had yo..."
  }
];

const Allpost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" py-[20px]">
       <div className="flex justify-center w-[80%] m-auto rounded-[5px]  bg-[#FAFAFA] items-center gap-[10px] h-[40px]">
          <h2 className="text-[16px] font-[500]">Showing posts with label Beauty. <span className="text-red-500 font-[600] underline">Show all posts</span></h2>
      </div>

      {currentPosts.map((post) => (
        <div key={post.id} className="flex border-b py-[20px]">
          <img src={post.image} alt={post.title} className="w-1/3 h-full object-cover mr-4 " />
          <div className="w-2/3">
            <div className="flex items-center">
              <span className="bg-red-500 text-white text-xs px-2 py-1 mr-2">{post.category}</span>
            </div>
            <h1 className="font-bold text-[15px] xl:text-[16px] 2xl:text-[17px] mt-2 mb-1">{post.title}</h1>
            <div className="text-sm text-gray-400 flex items-center">
              <FaUser className="mr-1" /> {post.author} <FaClock className="ml-3 mr-1" /> {post.date}
            </div>
            <p className="text-gray-700 text-[13px] xl:text-[14px] 2xl:text-[15px] mt-2">{post.content}</p>
            <button className="bg-brand_color2 text-white text-xs px-3 py-1 mt-2">Read More »</button>
          </div>
        </div>
      ))}

      <div className="flex justify-start space-x-2 mt-4">
        {[...Array(Math.ceil(posts.length / postsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 ${currentPage === index + 1 ? "bg-red-500 text-white" : "bg-black text-white"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Allpost;
