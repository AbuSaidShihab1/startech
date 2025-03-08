"use client";

import {useState,useEffect, useContext} from 'react'
import { IoMdHome } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LuCopyPlus } from "react-icons/lu";
import Header from '@/app/components/Header';
import { CartContext, useCart } from '@/app/context/CartContext';
import { FaFacebookMessenger, FaPinterestP, FaWhatsapp, FaRegBookmark } from "react-icons/fa";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import Footer from '@/app/components/Footer';
import { IoIosArrowForward } from "react-icons/io";
const specifications = (
  <>
    <div>
      <h2 className="text-lg font-bold">Specification</h2>
      <table className="w-full mt-4 ">
        <tbody>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold ">Size</td><td className="p-2">6.1 inches</td></tr>
          <tr className='border-b-[1px]'><td className="p-2 font-semibold">Type</td><td className="p-2">Super Retina XDR display</td></tr>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold">Resolution</td><td className="p-2">2556-by-1179-pixel resolution at 460 ppi</td></tr>
          <tr className='border-b-[1px]'><td className="p-2 font-semibold">Brightness</td><td className="p-2">1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)</td></tr>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold">Protection</td><td className="p-2">Fingerprint-resistant oleophobic coating</td></tr>
        </tbody>
      </table>
    </div>
  <div className="w-full ">
      <div className="">
        {/* Processor Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Processor</div>
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <span className="text-gray-500">Chipset</span>
            <span>A16 Bionic chip</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">CPU Type</span>
            <span className="text-right">
              6-core CPU with 2 performance and 4 efficiency cores <br /> 16-core Neural Engine
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">GPU</span>
            <span>5-core GPU</span>
          </div>
        </div>

        {/* Memory Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Memory</div>
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <span className="text-gray-500">RAM</span>
            <span>6GB</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Internal Storage</span>
            <span>128GB</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Card Slot</span>
            <span>N/A</span>
          </div>
        </div>

        {/* Rear Camera Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Rear Camera</div>
        <div className="p-4">
          <div>
            <span className="text-gray-500">Resolution</span>
            <p className="mt-1">
              Advanced dual-camera system <br /> 48MP Main Camera <br /> 12MP Ultra Wide Camera
            </p>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">Features</span>
            <p className="mt-1">
              48MP Main: 26 mm, f/1.6 aperture, sensor-shift optical image stabilization, 100% Focus Pixels, support for super high-resolution photos (24MP and 48MP)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full space-y-6">
      {/* Questions Section */}
      <div className="bg-white">
        <h2 className="text-lg font-semibold">Questions (2)</h2>
        <p className="text-sm text-gray-600">
          Have a question about this product? Get specific details from an expert.
        </p>
        <button className="mt-2 px-4 py-2 bg-brand_color text-white rounded-[4px] text-sm ">
          Ask Question
        </button>
        <div className="mt-4 space-y-4 border-t pt-4">
          <div>
            <p className="text-blue-600 text-sm font-medium">Fazle Hasan Abed on 29 Jan 2025</p>
            <p className="font-semibold">Q: Does the iPhone 15 support fast charging, and how quickly can it charge?</p>
            <p className="text-gray-700 text-sm">
              A: The iPhone 15 supports up to 20W fast charging. With a 20W adapter, it can charge up to 50% in just 30 minutes.
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="text-blue-600 text-sm font-medium">Imran Khan on 28 Dec 2024</p>
            <p className="font-semibold">Q: Is the iPhone 15 water-resistant?</p>
            <p className="text-gray-700 text-sm">
              A: Yes, the iPhone 15 is rated IP68 (maximum depth of 6 meters for up to 30 minutes) under IEC standard 60529.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white ">
     
     
  <div className='w-full flex justify-between items-center border-t-[1px] pt-[7px] border-[#eee]'>
  <div>
     <h2 className="text-lg font-semibold">Reviews (1)</h2>
        <p className="text-sm text-gray-600">Get specific details about this product from customers who own it.</p>
        
      </div>
      
      <button className="mt-2 px-4 py-2 bg-brand_color text-white rounded-[4px] text-sm">
          Write a Review
        </button>
  </div>
        <div className="mt-4 p-6 bg-gray-50 rounded-lg border">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="font-semibold mt-1">5 out of 5</p>
          <p className="text-gray-700 text-sm mt-2">
            Highly recommended for purchase. Excellent camera. Incredible performance. The speakers are impressively loud and clear. Overall, this is a perfect phone.
          </p>
          <p className="text-sm text-gray-500 mt-2">By <span className="font-medium text-blue-600">Toukir Ahamed</span> on 28 Dec 2024</p>
        </div>
      </div>
    </div>
  </>
  
  );
  export async function generateStaticParams() {
    // You need to fetch the list of products or product IDs
    const products = [
      { id: '1' },
      { id: '2' },
      // Add more product IDs here
    ];
  
    // Return the static paths for each product's `id`
    return products.map((product) => ({
      id: product.id, // id from product object
    }));
  }
const page = () => {
  const { addToCart } = useContext(CartContext);
    const tabs = ["Specification", "Description", "Questions (2)", "Reviews (1)"];
    const relatedProducts = [
      {
        name: "Samsung Galaxy Z Flip5 (8/256GB)",
        price: "183,999৳",
        image: "https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-z-flip5/galaxy-z-flip5-graphite-01-80x80.webp",
      },
      {
        name: "iPhone 15",
        price: "122,000৳",
        oldPrice: "159,999৳",
        image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-plus/iphone-15-plus-black-80x80.webp",
      },
    ];
    const [activeTab, setActiveTab] = useState("specification");
     const products = [
        {
          id: "1",
          name: "iPhone 15",
          price: 122000,
          regularPrice: 132418,
          discountPrice: 159999,
          productCode: "33912",
          brand: "Apple",
          mpn: "MTP03ZP/A",
          model: "iPhone 15 (A3090)",
          display: '6.1" Super Retina XDR OLED Display',
          processor: "A16 Bionic Chip",
          storage: "128GB",
          camera: "48MP + 12MP Rear, 12MP Front",
          features: ["Dynamic Island", "Face ID", "eSIM", "USB Type-C 3.0"],
          images: {
            main: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-plus/iphone-15-plus-black-500x500.webp",
            thumbnail: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-plus/iphone-15-plus-black-500x500.webp",
          },
          banner: "https://www.startech.com.bd/image/catalog/ads/2025/new-ac-offer-stel-2025%20(1).webp",

        },
        {
          id: "2",
          name: "Samsung Galaxy S24",
          price: 115000,
          regularPrice: 125000,
          discountPrice: 140000,
          productCode: "44021",
          brand: "Samsung",
          mpn: "SM-G991BZKEXSP",
          model: "Galaxy S24",
          display: '6.5" Dynamic AMOLED Display',
          processor: "Exynos 2200",
          storage: "256GB",
          camera: "50MP + 12MP Rear, 10MP Front",
          features: ["120Hz Refresh Rate", "Under Display Camera", "5G Support"],
          images: {
            main: "https://example.com/samsung-s24-main.webp",
            thumbnail: "https://example.com/samsung-s24-thumb.webp",
          },
          banner: "https://example.com/samsung-s24-banner.webp",

        },
      ];
      
  useEffect(() => {
    // Fetch the first product from the array
    setSelectedProduct(products[0]);
  }, []);
      const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { cart, totalPrice } = useCart();
  const [selectedOption, setSelectedOption] = useState("cash");
  const [cartPopup, setCartPopup] = useState(false);
const handleBuyNow = () => {
  addToCart({ ...selectedProduct, quantity })
  setCartPopup(true);
};


  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  if (!selectedProduct) return <p>Loading...</p>;

//--------------------add-to-cart---------------------------
const reviews = [
  {
    name: "Priya Purkait",
    date: "01 Feb 2025",
    review: "The TCL 4021 has a strong network, so it works every time I turn it on. I do not have any problems connecting to the network and calls always go through clearly.",
  },
  {
    name: "Sabbir Khan",
    date: "09 Jan 2025",
    review: "I recently purchased the TCL onetouch 4021. I really like the torchlight on this phone. It's very bright and easy to use.",
  },
];

const ReviewCard = ({ name, date, review }) => (
  <div className="border-t py-4">
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
    <p className="mt-2 text-gray-700">{review}</p>
    <p className="mt-2 text-sm text-gray-500">By <span className="text-blue-600 cursor-pointer">{name}</span> on {date}</p>
  </div>
);

  return (
       <section className='font-jost'>
           <section>
               <Header/>
  {/* -----------------hero-section--------------------- */}
             <section className=' bg-white px-[15px]  '>
                    <div className='mx-auto w-full xl:max-w-[1300px] py-[10px] lg:py-[20px] m-auto'>
                           <ul className='flex justify-start items-center gap-[10px]'>
                            <li className='text-gray-600 text-[20px]'><IoMdHome/></li>
                            <li><IoIosArrowForward/></li>
                            <li><a href='#' className='hover:underline'>Phone</a></li>
                            <li><IoIosArrowForward/></li>
                            <li><a href='#'className='hover:underline text-gray-600'>Iphone</a></li>
                            <li><IoIosArrowForward/></li>
                            <li><a href='#'className='hover:underline text-gray-600'>iPhone 15</a></li>
                           </ul>

     

                    </div>
                    <div className="flex mt-[15px] w-full xl:max-w-[1300px] items-center justify-between p-3 rounded-full border shadow-sm border-gray-200  mx-auto">
      {/* Share Section */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Share:</span>
        <FaFacebookMessenger className="text-black/80 cursor-pointer hover:text-black" />
        <FaPinterestP className="text-black/80 cursor-pointer hover:text-black" />
        <FaWhatsapp className="text-black/80 cursor-pointer hover:text-black" />
      </div>
      
      {/* Save & Compare Section */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-black/80 hover:text-black">
          <FaRegBookmark /> Save
        </button>
        <button className="flex items-center gap-1 text-black/80 hover:text-black">
          <FaPlus /> Add to Compare
        </button>
      </div>
    </div>
             </section>
            {/* -----------------hero-section--------------------- */}
               </section>
               {/* -----------------product descriptiion--------------------- */}
               <div className="h-auto bg-white pt-[20px]">
               <div className="mx-auto w-full px-[20px] xl:w-[1300px] py-[20px] flex justify-center items-center lg:flex-row flex-col gap-[15px]">
      {/* Left Side - Product Image and Banner */}
      <div className="lg:w-[40%] w-full flex flex-col items-center">
        <img src={selectedProduct.images.main} alt={selectedProduct.name} className="w-[60%] h-auto mb-[60px]" />
        <div className="flex items-center justify-center mb-4">
          <img src={selectedProduct.images.thumbnail} alt="Thumbnail" className="w-16 h-16 border rounded-lg" />
        </div>
        <img src={selectedProduct.banner} alt="Banner" className="w-full mt-[20px]" />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-[60%] py-2 lg:p-4">
      <h1 className="text-[20px] lg:text-[22px] font-[400] text-blue-500  mb-4">iPhone 15</h1>

<div className="flex flex-wrap gap-2 mb-4">
  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
    Price: <span className="font-[500] lg:font-bold">122,000৳</span> <del className="text-gray-500">159,999৳</del>
  </span>
  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">Regular Price: 132,418৳</span>
  {/* <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-green-600">Status: In Stock</span> */}
  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">Product Code: 33912</span>
  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">Brand: <span className="font-bold">Apple</span></span>
</div>

<h2 className="text-[17px] xl:text-xl font-[500] mt-[20px] mb-2">Key Features</h2>
<ul className="space-y-2 list-inside text-gray-700 mb-4">
  <li>MPN: MTP03ZP/A</li>
  <li>Model: iPhone 15 (A3090)</li>
  <li>Display: 6.1" Super Retina XDR OLED Display</li>
  <li>Processor: A16 Bionic Chip, Storage: 128GB</li>
  <li>Camera: 48MP + 12MP Rear, 12MP Front</li>
  <li>Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0</li>
</ul>
<a href="#details" className="text-red-500 font-semibold text-[17px] underline mb-4 block">View More Info</a>
<h2 className="text-[18px] 2xl:text-xl font-semibold mb-2">Payment Options</h2>
<div className="flex lg:flex-row flex-col gap-[10px] border overflow-hidden mb-4">
  <div
    className={`w-full lg:w-1/2 p-4 cursor-pointer border ${selectedOption === "cash" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
    onClick={() => setSelectedOption("cash")}
  >
    <p className="text-[18px] xl:text-[20px] 2xl:text-2xl font-bold text-gray-800">122,000৳ <span className="text-sm line-through text-gray-500">159,999৳</span></p>
    <p className="text-sm text-gray-600">Cash Discount Price</p>
    <p className="text-sm text-gray-600">Online / Cash Payment</p>
  </div>

  <div
    className={`w-full lg:w-1/2 p-4 cursor-pointer border  ${selectedOption === "emi" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
    onClick={() => setSelectedOption("emi")}
  >
    <p className="text-[18px] xl:text-[20px] 2xl:text-2xl font-bold text-gray-800">11,035৳/month</p>
    <p className="text-sm text-gray-600">Regular Price: 132,418৳</p>
    <p className="text-sm text-gray-600">0% EMI for up to 12 Months</p>
  </div>
</div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border overflow-hidden">
            <button className="text-xl font-bold px-4 py-2 border-r hover:bg-gray-100" onClick={decreaseQuantity}>
              <FaMinus />
            </button>
            <span className="px-4 text-lg font-medium">{quantity}</span>
            <button className="text-xl font-bold px-4 py-2 border-l hover:bg-gray-100" onClick={increaseQuantity}>
              <FaPlus />
            </button>
          </div>

          <button    onClick={handleBuyNow} className="bg-[#3749BB] text-white text-[16px] xl:text-[17px] font-[500] py-2 px-[50px] rounded-[3px] hover:bg-blue-700">
            Buy Now
          </button>
          {/* ---------------product-pop-up------------------------------ */}

          {cartPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-5 rounded-[4px] shadow-lg w-[95%] lg:w-[500px] relative flex flex-col">
      {/* Close Button */}
      <button
        onClick={() => setCartPopup(false)}
        className="absolute top-2 right-3 text-gray-500 text-2xl font-bold"
      >
        &times;
      </button>

      {/* Top Section */}
      <div className="flex  border-b  border-gray-300 pb-3">
        {/* Left: Success Message */}
        <div className="w-2/3 flex border-r-[1px] border-[#eee]">
          <FaCheckCircle className="text-green-500 text-xl mr-2" />
          <p className="text-gray-700 text-sm">
            You have added <b className="text-red-500">{cart.length > 0 ? cart[cart.length - 1].name : "an item"}</b> to your shopping cart!
          </p>
        </div>

        {/* Right: Cart Info */}
        <div className="w-1/3 pl-3">
          <div className="mb-2">
            <p className="text-xs text-gray-600">Total Items:</p>
            <p className="text-lg font-bold">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </p>
          </div>
          <div>
            <p className="text-xs text-blue-600 font-semibold">Total Price:</p>
            <p className="text-lg font-bold">
              {totalPrice.toLocaleString()}৳
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-start mt-3">
        <Link href="/shopping-cart">
        <button className="bg-brand_color text-white px-4 py-2 rounded font-semibold  transition">
          View Cart
        </button>
        </Link>
    
        <button className="border border-brand_color text-brand_color px-4 py-2 rounded font-semibold hover:bg-brand_colortransition ml-2">
          Confirm Order
        </button>
      </div>
    </div>
  </div>
)}


          {/* --------------------product-popup------------------ */}
        </div>
      </div>
    </div>
    </div>
               {/* -------------product-description--------------------- */}

               {/* ---------------------full-description---------------------- */}
                <section className='bg-[#F2F4F8] scroll-smooth'>
                <div className="flex gap-6 mx-auto lg:flex-row flex-col py-[25px] px-[15px] w-full xl:max-w-[1300px] ">
      {/* Left Section */}
      <div className="flex-1 scroll-smooth" id="details">
        <div className="flex mb-[15px] gap-[7px] lg:gap-[15px]">
        <a
            href='#specification'
              className={`px-4 py-2 text-[12px] text-nowrap lg:text-sm font-semibold ${
                activeTab === "specification" ? "bg-red-500 shadow-md rounded-[5px] text-white" : "bg-white shadow-md rounded-[5px]"
              }`}
              onClick={() => setActiveTab("specification")}
            >
              Specification
            </a>
            <a
            href='#description'
              className={`px-4 py-2 text-[12px] text-nowrap lg:text-sm font-semibold ${
                activeTab === "description" ? "bg-red-500 shadow-md rounded-[5px] text-white" : "bg-white shadow-md rounded-[5px]"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </a>
            <a
            href='#faq'
              className={`px-4 py-2 text-[12px] text-nowrap lg:text-sm font-semibold ${
                activeTab === "faq" ? "bg-red-500 shadow-md rounded-[5px] text-white" : "bg-white shadow-md rounded-[5px]"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              Questions
            </a>
            <a
            href='#review'
              className={`px-4 py-2 text-[12px] text-nowrap lg:text-sm font-semibold ${
                activeTab === "review" ? "bg-red-500 shadow-md rounded-[5px] text-white" : "bg-white shadow-md rounded-[5px]"
              }`}
              onClick={() => setActiveTab("review")}
            >
              Reviews
            </a>
        </div>

        <div className="">
       <div className='bg-white p-[15px] scroll-smooth'id="specification">
       <div>
      <h2 className="text-lg font-bold">Specification</h2>
      <table className="w-full mt-4 ">
        <tbody>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold ">Size</td><td className="p-2">6.1 inches</td></tr>
          <tr className='border-b-[1px]'><td className="p-2 font-semibold">Type</td><td className="p-2">Super Retina XDR display</td></tr>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold">Resolution</td><td className="p-2">2556-by-1179-pixel resolution at 460 ppi</td></tr>
          <tr className='border-b-[1px]'><td className="p-2 font-semibold">Brightness</td><td className="p-2">1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)</td></tr>
          <tr className="border-b-[1px]"><td className="p-2 font-semibold">Protection</td><td className="p-2">Fingerprint-resistant oleophobic coating</td></tr>
        </tbody>
      </table>
         </div>
        <div className="w-full ">
      <div className="">
        {/* Processor Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Processor</div>
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <span className="text-gray-500">Chipset</span>
            <span>A16 Bionic chip</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">CPU Type</span>
            <span className="text-right">
              6-core CPU with 2 performance and 4 efficiency cores <br /> 16-core Neural Engine
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">GPU</span>
            <span>5-core GPU</span>
          </div>
        </div>

        {/* Memory Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Memory</div>
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <span className="text-gray-500">RAM</span>
            <span>6GB</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Internal Storage</span>
            <span>128GB</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Card Slot</span>
            <span>N/A</span>
          </div>
        </div>

        {/* Rear Camera Section */}
        <div className="bg-gray-100 p-2 text-blue-700 font-semibold">Rear Camera</div>
        <div className="p-4">
          <div>
            <span className="text-gray-500">Resolution</span>
            <p className="mt-1">
              Advanced dual-camera system <br /> 48MP Main Camera <br /> 12MP Ultra Wide Camera
            </p>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">Features</span>
            <p className="mt-1">
              48MP Main: 26 mm, f/1.6 aperture, sensor-shift optical image stabilization, 100% Focus Pixels, support for super high-resolution photos (24MP and 48MP)
            </p>
          </div>
        </div>
      </div>
      </div>
       </div>
    <div className="w-full space-y-6">
                     {/* -----------description---------------- */}

                     <div className="bg-white mt-[10px] p-[15px] scroll-smooth"id="description">
      <h2 className="text-[16px] md:text-[18px] font-[600] mb-4">Description</h2>
      <h3 className="text-[18px] md:text-[20px] font-[600] mb-2">TCL Onetouch 4021</h3>
      <p className="text-sm md:text-base text-gray-700 mb-4">
        The <span className="font-bold">TCL onetouch 4021</span> is a Compact Feature Phone designed for simplicity and reliability. With a compact 1.8-inch TFT display with 128 x 160 pixels resolution for clear and easy-to-read visuals. Powered by the MediaTek MT6261D processor, this Feature Phone ensures smooth performance for basic tasks. With 4 MB of RAM and 4 MB of internal storage, expandable via microSD up to 32 GB, it provides adequate space for essential contacts and messages. This TCL onetouch 4021 Compact Feature Phone supports dual SIM functionality, allowing you to manage two numbers simultaneously, and operates on GSM networks.
      </p>
      <p className="text-sm md:text-base text-gray-700 mb-4">
        The 1030 mAh Li-Ion battery offers long-lasting power, with up to 6.5 hours of talk time and up to 13.5 days of standby time. It also includes a 0.08 MP rear camera for capturing basic photos and videos. Additional features such as Bluetooth 2.1, a 3.5 mm audio jack, and a built-in FM radio enhance its functionality. Weighing just 76 grams and measuring 114.8 x 47.28 x 12.7 mm, this TCL onetouch 4021 Phone is lightweight and portable, making it an ideal choice for those seeking a straightforward and dependable button phone.
      </p>
      <p className="text-sm md:text-base text-gray-700 mb-4">
        Its sleek design in Dark Night Grey adds a touch of style, while its durable build ensures it can withstand everyday use. Whether you need a reliable backup phone or a simple device for everyday communication, the TCL onetouch 4021 offers a perfect blend of practicality and convenience, making it a standout among TCL Mobile Phones.
      </p>
      <h3 className="text-[18px] md:text-[20px] font-[600] mb-2">
        Buy TCL Onetouch 4021 from the Best Mobile Phone Shop in Bangladesh: Star Tech
      </h3>
      <p className="text-sm md:text-base text-gray-700">
        In Bangladesh, you can get original <span className="font-bold">TCL onetouch 4021 Mobile Phone</span> from Star Tech. We have a large collection of latest 
        <a href="#" className="text-red-500 hover:underline"> TCL Mobile Phone</a> to purchase. Order Online Or Visit your Nearest 
        <a href="#" className="text-red-500 hover:underline"> Star Tech Shop</a> to get yours at lowest price. The TCL onetouch 4021 comes with 1 Year Warranty.
      </p>
    </div>
    {/* ----------------faq------------------- */}
    <div className="w-full"id="faq">
      <div className="bg-white  p-[15px]  mb-6">
        <h1 className="text-xl font-bold mb-2">
          What is the price of TCL Onetouch 4021 in Bangladesh?
        </h1>
        <p className="text-base">
          The latest price of TCL Onetouch 4021 in Bangladesh is <strong>1,600৳</strong>. You can buy the TCL Onetouch 4021 at the best price from our website or visit any of our showrooms.
        </p>
      </div>

      <div className="bg-white p-[15px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Questions (3)</h2>
          <button className="border border-brand_color2 text-brand_color2 px-4 py-2 rounded-md hover:bg-brand_color2 hover:text-white transition">
            Ask Question
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Have a question about this product? Get specific details about this product from an expert.
        </p>

        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="text-sm text-blue-600 font-semibold">Asha Mitra <span className="text-gray-500">on 01 Feb 2025</span></p>
            <p className="text-base font-semibold mt-1">Does this TCL Onetouch 4021 button phone have a torch light?</p>
            <p className="text-base mt-1">Yes, mam, the TCL Onetouch 4021 feature phone has a torch light.</p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm text-blue-600 font-semibold">Nur-E-Jannat <span className="text-gray-500">on 09 Jan 2025</span></p>
            <p className="text-base font-semibold mt-1">What is the battery capacity of TCL Onetouch 4021?</p>
            <p className="text-base mt-1">Mam, the TCL Onetouch 4021 has a Li-Ion 1030mAh battery.</p>
          </div>

          <div>
            <p className="text-sm text-blue-600 font-semibold">Nusrat Jahan <span className="text-gray-500">on 08 Jan 2025</span></p>
            <p className="text-base font-semibold mt-1">How is the display and usability of the TCL OneTouch 4021?</p>
            <p className="text-base mt-1">The TCL OneTouch 4021’s 1.8-inch display is clear and bright enough for basic tasks like making calls and sending texts.</p>
          </div>
        </div>
      </div>
    </div>
      {/* Questions Section */}
      <div className="bg-white p-[15px]">
        <div className='flex justify-between items-center pb-[10px]'>
   <div>
   <h2 className="text-lg font-semibold">Questions (2)</h2>
        <p className="text-sm text-gray-600">
          Have a question about this product? Get specific details from an expert.
        </p>
   </div>
        <button className="mt-2 px-4 py-2 bg-brand_color2 text-white rounded-[4px] text-sm ">
          Ask Question
        </button>
        </div>
    
       
        <div className="mt-4 space-y-4 border-t pt-4">
          <div>
            <p className="text-brand_color2 text-sm font-medium">Fazle Hasan Abed on 29 Jan 2025</p>
            <p className="font-semibold">Q: Does the iPhone 15 support fast charging, and how quickly can it charge?</p>
            <p className="text-gray-700 text-sm">
              A: The iPhone 15 supports up to 20W fast charging. With a 20W adapter, it can charge up to 50% in just 30 minutes.
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="text-brand_color2 text-sm font-medium">Imran Khan on 28 Dec 2024</p>
            <p className="font-semibold">Q: Is the iPhone 15 water-resistant?</p>
            <p className="text-gray-700 text-sm">
              A: Yes, the iPhone 15 is rated IP68 (maximum depth of 6 meters for up to 30 minutes) under IEC standard 60529.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full p-[15px] bg-white"id="review">
        <div className='flex justify-between items-center py-[10px]'>
        <h2 className="text-xl font-semibold">Reviews (2)</h2>

        <button className="mt-4 px-4 py-2 border border-brand_color2 text-brand_color2 rounded-lg hover:bg-brand_color2 hover:text-white transition">
        Write a Review
      </button>
        </div>
      <p className="text-gray-600">Get specific details about this product from customers who own it.</p>
      
      <div className="flex items-center mt-3">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="ml-2 text-lg font-semibold">5 out of 5</span>
      </div>
      
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      

    </div>
    </div>
        </div>
  
      </div>
      
      {/* Right Section */}
      <div className="w-full lg:w-72  bg-white h-full ">
        <h3 className="text-lg font-semibold text-center text-gray-700 py-[15px] border-b-[1px] border-[#eee]">Related Product</h3>
        <div className="mt-2 space-y-2 h-auto">
          {relatedProducts.map((product, index) => (
            <div key={index} className="flex items-center space-x-4 border-b-[1px] p-2 bg-white">
              <img src={product.image} alt={product.name} className="w-16 h-16" />
              <div>
                <p className="font-[500] text-[16px] mb-[10px]">{product.name}</p>
                <p className="text-red-500">{product.price} <span className="line-through text-gray-400">{product.oldPrice}</span></p>
                <button className="text-sm flex items-center mt-1 text-gray-600">
                  <LuCopyPlus className="mr-1" /> Add to Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
                   </div>
          
                </section>
                <Footer/>
               {/* ---------------------full-description---------------------- */}
               </section>

  )
}

export default page
