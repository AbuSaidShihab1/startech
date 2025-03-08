"use client";

import React,{useState} from 'react'
import Header from '../components/Header';
import { IoMdHome } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Footer from '../components/Footer';
import ProductList from './components/ProductList';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
    const [minPrice, setMinPrice] = useState(20);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [isOpen, setIsOpen] = useState(false);
    const closeSidebar = () => setIsOpen(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
  
    const [filters, setFilters] = useState({
        priceRange: [159999, 249999],
        availability: true,
        series: true,
        storage: true,
        displaySize: true,
        simSupport: true,
      });
    
      const toggleSection = (section) => {
        setFilters((prev) => ({ ...prev, [section]: !prev[section] }));
      };
      const handleMinPriceChange = (value) => {
        if (value < maxPrice) {
          setMinPrice(value);
        }
      };
    
      const handleMaxPriceChange = (value) => {
        if (value > minPrice) {
          setMaxPrice(value);
        }
      };
      const products = [
        { id: 1, name: 'iPhone 13', price: 799, discount: 37999, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'iPhone 14', price: 899, discount: 21499, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'iPhone 12', price: 699, discount: 47999, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'iPhone 13 Pro', price: 999, discount: 44599, image: 'https://via.placeholder.com/150' }
      ];
      const iPhoneData = [
        { model: 'iPhone 16 Pro', price: '184,999৳' },
        { model: 'iPhone 16 Pro Max', price: '218,500৳' },
        { model: 'iPhone 16 Pro', price: '183,500৳' },
        { model: 'iPhone 16', price: '148,500৳' },
        { model: 'iPhone 15', price: '122,000৳' },
        { model: 'iPhone 15 Plus', price: '152,000৳' },
        { model: 'iPhone 15 Pro Max', price: '180,000৳' },
        { model: 'iPhone 15 Pro', price: '182,000৳' },
      ];
      const [sortOption, setSortOption] = useState('Default');
      const [showCount, setShowCount] = useState(20);
    
      const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === 'Price (Low > High)') return a.price - b.price;
        if (sortOption === 'Price (High > Low)') return b.price - a.price;
        return 0;
      });
  return (
    <section className='font-jost bg-[#F2F4F8]'>
        <section>
            <Header/>
            {/* -----------------hero-section--------------------- */}
             <section className=' bg-white px-[15px] border-b-[1px] border-[#eee] shadow-sm'>
                    <div className='mx-auto w-full xl:max-w-[1300px]  py-[20px] m-auto'>
                           <ul className='flex justify-start items-center gap-[10px]'>
                            <li className='text-gray-600 text-[16px] xl:text-[20px]'><IoMdHome/></li>
                            <li><IoIosArrowForward/></li>
                            <li><a href='#' className='hover:underline text-[14px] xl:text-[15px]'>Phone</a></li>
                            <li><IoIosArrowForward/></li>
                            <li><a href='#'className='hover:underline text-gray-600 text-[14px] xl:text-[15px]'>Iphone</a></li>
                           </ul>

                           <div className='mt-[15px]'>
                            <h1 className='text-secondary mb-[8px] xl:mb-[10px] text-[19px] font-[500] xl:text-[20px]'>iPhone Price in Bangladesh</h1>
                            <p className='text-[14px] text-wrap'>Official iPhone Price in Bangladesh starts from BDT 121,000 to BDT 284,590 depending on model and features. Get international warranty on latest iPhone 16, iPhone 15, and iPhone 14 from Star Tech. Order yours now and get delivered to your doorstep.</p>
                           </div>

                    </div>
             </section>
            {/* -----------------hero-section--------------------- */}
        </section>
        {/* ----------------------product-sidebar-------------------------- */}
        <section className='mx-auto w-full px-[15px] xl:max-w-[1300px] py-[20px]'>
            <div className='flex justify-center '>
            <div className="hidden xl:block xl:w-[20%] ">
      {/* Price Range */}
      <div className="mb-1 border p-4 bg-white">
        <h2 className="font-semibold text-lg mb-2">Price Range</h2>

    {/* Filter by Price */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter By Price</h3>
      <div>
        <div className="flex justify-between text-[16px] font-[500] text-gray-500 mb-2">
          <span className=''>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
        <div className="relative h-2 bg-gray-300 rounded-full">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: `${((minPrice - 30) / (1500 - 30)) * 100}%`,
              right: `${100 - ((maxPrice - 30) / (1500 - 30)) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="30"
            max="1500"
            value={minPrice}
            onChange={(e) => handleMinPriceChange(Number(e.target.value))}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-auto"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min="30"
            max="1500"
            value={maxPrice}
            onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
            className="absolute top-0 w-full h-2 appearance-none bg-transparent pointer-events-auto"
            style={{ zIndex: 3 }}
          />
        </div>
      </div>
    </div>
        <div className="flex justify-between mt-3">
          <input type="text" value={filters.priceRange[0]} className="border p-1 text-center w-20 rounded-md" readOnly />
          <input type="text" value={filters.priceRange[1]} className="border p-1 text-center w-20 rounded-md" readOnly />
        </div>
      </div>

      {[
        { key: "availability", title: "Availability", options: ["In Stock", "Pre Order", "Up Coming"] },
        { key: "series", title: "Series", options: ["16 Series", "15 Series", "14 Series"] },
        { key: "storage", title: "Internal Storage", options: ["64GB", "128GB", "256GB", "512GB", "1TB"] },
        { key: "displaySize", title: "Display Size", options: ["Below 6.0\"", "6.0\" to 6.4\"", "6.5\" to 6.9\""] },
        { key: "simSupport", title: "SIM Support", options: ["Dual Nano-SIM", "Nano-SIM + eSIM", "Dual eSIM"] },
      ].map(({ key, title, options }) => (
        <div key={key} className="mb-1 border p-4  bg-white">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(key)}>
            <h2 className="font-semibold text-[16px]">{title}</h2>
            <FaChevronDown className={`transform transition-transform ${filters[key] ? "rotate-180" : "rotate-0"}`} />
          </div>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${filters[key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="mt-3 space-y-2">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='w-full xl:w-[80%] xl:px-4'>
    <div className="px-3 2xl:px-6 py-[8px] flex justify-between items-center border-[1px] rounded-[5px] border-[#eee] bg-white mb-[10px]">
      <h1 className="xl:block hidden text-[18px] font-bold">iPhone</h1>
      <div>
      {/* Filter Button */}
      <div className='bg-gray-100 flex xl:hidden justify-center items-center rounded-[5px] gap-[10px] text-[17px] px-[10px] py-[4px] cursor-pointer' onClick={toggleSidebar}>
        <IoFilterSharp />
        <span>Filter</span>
      </div>
      
      {/* Overlay */}
      {isOpen && <div className="fixed  inset-0 bg-black opacity-50 z-40" onClick={closeSidebar}></div>}
      
      {/* Sidebar */}
      <div className={`fixed  top-0 right-0 z-[10000] w-[300px] h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-4 overflow-y-auto z-50`}>
        <button className="absolute top-2 right-2 text-lg" onClick={closeSidebar}>✖</button>
        <h2 className="font-semibold text-lg mb-4">Filters</h2>
        
        {/* Price Range */}
        <div className="mb-4 border p-4">
          <h2 className="font-semibold text-lg mb-2">Price Range</h2>
          <input type="range" min="0" max="250000" className="w-full" />
        </div>
        
        {[
          { key: "availability", title: "Availability", options: ["In Stock", "Pre Order", "Up Coming"] },
          { key: "series", title: "Series", options: ["16 Series", "15 Series", "14 Series"] },
          { key: "storage", title: "Internal Storage", options: ["64GB", "128GB", "256GB", "512GB", "1TB"] },
          { key: "displaySize", title: "Display Size", options: ["Below 6.0\"", "6.0\" to 6.4\"", "6.5\" to 6.9\""] },
        ].map(({ key, title, options }) => (
          <div key={key} className="mb-4 border p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(key)}>
              <h2 className="font-semibold text-[16px]">{title}</h2>
              <FaChevronDown className={`transform transition-transform ${filters[key] ? "rotate-180" : "rotate-0"}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${filters[key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="mt-3 space-y-2">
                {options.map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-gray-700">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="flex items-center ">
        <label className="mr-2">Show:</label>
        <select
          value={showCount}
          onChange={(e) => setShowCount(Number(e.target.value))}
          className="border px-[10px] py-[4px] rounded mr-4"
        >
          {[20, 40, 60, 80, 100].map((count) => (
            <option key={count} value={count}>{count}</option>
          ))}
        </select>

        <label className="mr-2">Sort By:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-[10px] py-[4px] rounded"
        >
          <option>Default</option>
          <option>Price (Low {">"} High)</option>
          <option>Price (High {">"} Low)</option>
        </select>
      </div>
    </div>
      <ProductList/>

      {/* --------------------bottom section----------------- */}
      <div className="bg-white mt-[50px] ">
      <div className="p-[15px]">
        <h1 className="text-[17px] lg:text-[18px] font-[600]  text-blue-700 mb-2">
          iPhone Available at the Best Price in Bangladesh
        </h1>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          <span className="text-red-500">iPhones</span> are the trendsetters of smartphones in terms of innovation, design, and versatility. As of 2025, Apple Inc. is the largest tech giant in the world for market capital and revenue. Parallel to Apple's smartphones, the company single-handedly tops every other niche of personal devices with <span className="text-red-500">iPad</span>, <span className="text-red-500">MacBook</span>, <span className="text-red-500">Mac Mini</span>, <span className="text-red-500">Mac</span>, and <span className="text-red-500">MacStudio</span> and a vast ecosystem of accessories.
        </p>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          Buying an iPhone in Bangladesh can be challenging at times. With Star Tech, the challenge is met. Star Tech <span className="text-red-500">Apple Store</span> offers all the latest iPhones at the most enticing price in Bangladesh. Find the most captivating iPhone deals from our widest segment of Apple devices at the Apple Store.
        </p>

        <h2 className="text-[18px] font-[600]  text-blue-700 mb-2 mt-8 pb-2">
          Latest iPhone Price List in BD 2025
        </h2>
        <table className="w-full  ">
          <thead>
            <tr className="text-left">
              <th className="p-3  border-b-[1px] border-[#eee] text-left">Apple iPhone List</th>
              <th className="p-3 border-b-[1px] border-[#eee] text-right">Price in BD</th>
            </tr>
          </thead>
          <tbody>
            {iPhoneData.map((item, index) => (
              <tr key={index} className="text-center ">
                <td className="p-3 border-b-[1px] text-left border-[#eee]">{item.model}</td>
                <td className="p-3 border-b-[1px] text-right border-[#eee]">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-[17px] xl:text-[18px] font-[600]  text-blue-700 mb-2 mt-8 pb-2">
          Available iPhone Series in Bangladesh
        </h2>
        <p className="text-gray-800 mb-2 xl:mb-4 text-[14px] xl:text-[15px]">
          Apple releases a new series of <span className="text-red-500">iPhones</span> every year, with two or three variants along with the base model. The latest line of Apple iPhones is the iPhone 16 series, released in 2025. Along with these, there's the iPhone 15 series, the iPhone 14 series, and the iPhone SE, which are great phones and are offered at exciting, reduced prices by Apple.
        </p>

        <h3 className="text-[17px] xl:text-xl font-semibold text-gray-800 mt-6 mb-2">iPhone 16 Series</h3>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          The latest iPhone 16 series is the successor to the previous gen of the iPhone 15. Currently, Apple sells four variants of the iPhone 16. With the iPhone 16 base model, there's the larger iPhone 16 Plus, and two flagship variants named iPhone 16 Pro and iPhone 16 Pro Max.
        </p>

        <h4 className="text-[17px] xl:text-lg font-semibold text-gray-800 mt-2 xl:mt-4 mb-2">iPhone 16 & iPhone 16 Plus</h4>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          The regular iPhone 16 and iPhone 16 Plus match every technical specification except the size. While the base model is 6.1 inches in screen size, the affordable flagship iPhone 16 Plus features a giant 6.7-inch Super Retina XDR Display. Both iPhone 16 and iPhone 16 Plus smartphones house Apple's A18 Bionic Chip, running iOS 16. With the Dynamic Island in the iPhone 16 and 16 Plus, these are your best choices to experience the latest iPhone on a budget.
        </p>

        <h4 className="text-[17px] xl:text-lg font-semibold text-gray-800 mt-2 xl:mt-4 mb-2">iPhone 16 Pro & iPhone 16 Pro Max</h4>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          iPhone 16 Pro and iPhone 16 Pro Max are the latest flagship smartphones from Apple. These models have the latest A18 Pro Bionic Apple silicon and a new octa-core GPU. The iPhone 16 Pro and iPhone 16 Pro Max feature a titanium build and are available in 4 stunning colors: black titanium, natural titanium, white titanium, and desert titanium.
        </p>

        <h3 className="text-[17px] xl:text-xl font-semibold text-gray-800 mt-2 xl:mt-6 mb-2">iPhone 15 Series</h3>
        <p className="text-gray-800 mb-4 text-[14px] xl:text-[15px]">
          The iPhone 15 series introduced several significant upgrades over the iPhone 14 series. The iPhone 15 and 15 Plus feature a 6.1-inch and 6.7-inch Super Retina XDR Display, powered by the A16 Bionic Chip, and introduced USB C connectivity for faster data transfer and versatile charging.
        </p>
      </div>
    </div>
      {/* ----------------------------bottom-section--------------------- */}
    </div>
            </div>
        </section>
        <Footer/>
    </section>
  )
}

export default page
