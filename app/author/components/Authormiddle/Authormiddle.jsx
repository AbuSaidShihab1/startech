"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const articles = [
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2016/09/january-31-calendar-ss-1920-600x338.jpg",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/08/google-lightbulbs-1920-592x338.jpg.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/12/rand-fishkin-600x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/11/AI-search-engine-1920-592x338.png",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/10/google-search-traffic-decline-1920-600x338.png.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "59% of Americans click on brands they know in Google results: Survey",
    description:
      "Also, nearly half of Americans trust organic results more than paid results and Google remains the most trusted source for information.",
    date: "Feb 27, 2025 at 3:09 pm ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
  {
    title: "Survey: 42% of people say Google Search is becoming less useful",
    description:
      "More than half of respondents also said they rely on their community for information rather than Google or other search engines.",
    date: "Feb 26, 2025 at 11:19 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/02/google-robot-broken-sad-1920-592x338.jpg.webp",
  },
  {
    title: "Google updates algorithm to prioritize user experience",
    description:
      "The latest update aims to provide better search results by focusing on user experience metrics.",
    date: "Feb 25, 2025 at 10:00 am ET",
    image: "https://searchengineland.com/wp-content/seloads/2024/06/google-logo-spikes-1920-592x338.jpg.webp",
  },
];

const tags = ["SEO", "PPC", "Google", "Search marketing history", "Platforms", "Paid social"];

const Authormiddle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => (prev < Math.ceil(articles.length / articlesPerPage) ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="w-full lg:w-[60%] py-4 lg:p-4  text-gray-900">
      <h1 className="text-[22px] xl:text-[26px] font-[500] text-gray-800">About Danny Goodwin</h1>
      <p className="mt-2 text-gray-800 font-sans">
        Danny Goodwin is Editorial Director of Search Engine Land & {" "}
        <a href="#" className="text-blue-500 font-semibold underline">Search Marketing Expo - SMX</a>.
        He joined Search Engine Land in 2022 as Senior Editor. In addition to reporting on the latest search marketing news,
        he manages Search Engine Land’s SME (Subject Matter Expert) program. He also helps program U.S. SMX events.
      </p>
      <p className="mt-2 text-gray-800 font-sans">
        Goodwin has been editing and writing about the latest developments and trends in search and digital marketing since 2007.
        He previously was Executive Editor of Search Engine Journal (2017-2022), managing editor of Momentology (2014-2016),
        and editor of Search Engine Watch (2007-2014). He has spoken at many major search conferences and virtual events,
        and has been sourced for his expertise by a wide range of publications and podcasts.
      </p>
      <div className="mt-4 border-b-[1px] border-[#eee] pb-[20px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-[10px]">Related topics</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-brand_color text-white font-sans px-3 py-1 rounded-[4px] text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-[10px]">Danny Goodwin’s latest articles</h2>
        <div className="mt-4 grid gap-4">
          {currentArticles.map((article, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white  gap-[15px]  overflow-hidden">
              <img src={article.image} alt="Article" className="w-full md:w-40 h-32 object-cover" />
              <div className=" lg:pl-[20px] mt-[10px] lg:mt-0 flex flex-col justify-between">
                <h4 className="text-gray-600 text-[16px] uppercase">Seo</h4>
                <h1 className="text-lg font-semibold text-blue-900 hover:underline cursor-pointer">{article.title}</h1>
                <p className="text-gray-700 text-sm ">{article.description}</p>
                <span className="text-gray-600 text-xs mt-1">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          <button onClick={prevPage} className="px-3 py-1 bg-gray-100 text-gray-800">Previous</button>
          {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1  text-sm font-medium ${currentPage === i + 1 ? "bg-blue-500 text-white" : "border-blue-500 border-[1px] text-gray-800"}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={nextPage} className="px-3 py-1  bg-gray-100 text-gray-800">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Authormiddle;
