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

    <Allpost/>

    </div>
  );
};

export default Blogleftside;
