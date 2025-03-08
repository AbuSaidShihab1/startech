"use client"
import React from "react";
import { AiOutlineTag } from "react-icons/ai";
import { useRouter } from "next/navigation"; 

const products = [
  {
    id:1,
    name: "Sharp FP-J30E-B Air Purifier",
    price: 19500,
    original_price: 20000,
    discount: 500,
    discount_percentage: 3,
    image: "https://www.startech.com.bd/image/cache/catalog/appliance/air-purifier/sharp/fp-j30e-b/fp-j30e-b-001-200x200.webp",
  },
  {
    id:2,
    name: "AMD Ryzen 7 7700 Budget Gaming Desktop PC",
    price: 49999,
    original_price: 58000,
    discount: 8001,
    discount_percentage: 14,
    gift:"Cougar Fusion SF Gaming Chair",
    image: "https://www.startech.com.bd/image/cache/catalog/desktop-pc/ryzen-pc/ryzen-7-7700/ryzen-7-7700-01-200x200.webp",
  },
  {
    id:3,
    name: "AMD Ryzen 5 3400G Processor Desktop PC",
    price: 20799,
    original_price: 24700,
    discount: 3901,
    discount_percentage: 16,
    image: "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-5-3400g-processor-desktop-pc-0011-200x200.webp",
  },
  {
    id:4,
    name: "AMD Ryzen 5 8500G Desktop PC",
    price: 36999,
    original_price: 40100,
    discount: 3101,
    discount_percentage: 8,
    image: "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-5-8500g-desktop-pc-00-200x200.webp",
  },
  {
    id:5,
    name: "XINJI NOTHING 1 Smart Watch",
    price: 3999,
    original_price: 4599,
    discount: 600,
    discount_percentage: 13,
    image: "https://www.startech.com.bd/image/cache/catalog/laptop-accessories/backpack/lenovo/ideapad-gaming-modern/ideapad-gaming-modern-01-200x200.webp",
  },
  {
    id:6,
    name: "Sharp FP-J30E-B Air Purifier",
    price: 19500,
    original_price: 20000,
    discount: 500,
    discount_percentage: 3,
    image: "https://www.startech.com.bd/image/cache/catalog/printer/hp-printer/deskjet-ink-advantage-2775/deskjet-ink-advantage-2775-01-200x200.webp",
  },
  {
    id:7,
    name: "AMD Ryzen 7 7700 Budget Gaming Desktop PC",
    price: 49999,
    original_price: 58000,
    discount: 8001,
    discount_percentage: 14,
    gift:"Cougar Fusion SF Gaming Chair",
    image: "https://www.startech.com.bd/image/cache/catalog/game-pad/microsoft/xbox-wireless/xbox-wireless-02-200x200.webp",
  },
  {
    id:8,
    name: "AMD Ryzen 5 3400G Processor Desktop PC",
    price: 20799,
    original_price: 24700,
    discount: 3901,
    discount_percentage: 16,
    image: "https://www.startech.com.bd/image/cache/catalog/earbuds/black-shark/t11/t11-grey-01-200x200.webp",
  },
  {
    id:9,
    name: "AMD Ryzen 5 8500G Desktop PC",
    price: 36999,
    original_price: 40100,
    discount: 3101,
    discount_percentage: 8,
    image: "https://www.startech.com.bd/image/cache/catalog/television/haier/h43p7ux/h43p7ux-01-200x200.webp",
  },
  {
    id:10,
    name: "XINJI NOTHING 1 Smart Watch",
    price: 3999,
    original_price: 4599,
    discount: 600,
    discount_percentage: 13,
    image: "https://www.startech.com.bd/image/cache/catalog/tablet-pc/black-shark/pad-6/pad-6-05-200x200.webp",
  },
  {
    id:11,
    name: "XINJI NOTHING 1 Smart Watch",
    price: 3999,
    original_price: 4599,
    discount: 600,
    discount_percentage: 13,
    image: "https://www.startech.com.bd/image/cache/catalog/laptop-accessories/backpack/lenovo/ideapad-gaming-modern/ideapad-gaming-modern-01-200x200.webp",
  },
  {
    id:12,
    name: "Sharp FP-J30E-B Air Purifier",
    price: 19500,
    original_price: 20000,
    discount: 500,
    discount_percentage: 3,
    image: "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-7-2-in-1-14ahp9/yoga-7-2-in-1-14ahp9-01-200x200.webp",
  },
  {
    id:13,
    name: "AMD Ryzen 7 7700 Budget Gaming Desktop PC",
    price: 49999,
    original_price: 58000,
    discount: 8001,
    discount_percentage: 14,
    gift:"Cougar Fusion SF Gaming Chair",
    image: "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/14-ep0160tu/14-ep0160tu-01-200x200.webp",
  },
  {
    id:14,
    name: "AMD Ryzen 5 3400G Processor Desktop PC",
    price: 20799,
    original_price: 24700,
    discount: 3901,
    discount_percentage: 16,
    image: "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/pd49/agon-pro-pd49-01-200x200.webp",
  },
  {
    id:15,
    name: "AMD Ryzen 5 8500G Desktop PC",
    price: 36999,
    original_price: 40100,
    discount: 3101,
    discount_percentage: 8,
    image: "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-01-200x200.webp",
  },
  {
    id:16,
    name: "XINJI NOTHING 1 Smart Watch",
    price: 3999,
    original_price: 4599,
    discount: 600,
    discount_percentage: 13,
    image: "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-ag276fk/agon-pro-ag276fk-01-200x200.webp",
  },
];

const FeaturedProduct = ({ product }) => {
  const router=useRouter();
  return (
    <section className='mx-auto w-full px-[15px]  xl:max-w-[1300px] py-[30px] font-jost'>
    <div className='text-center'>
        <h2 className='text-[18px] xl:text-[25px] font-[600]'>Featured Products</h2>
        <p className='text-[14px] xl:text-[16px] mt-[4px]'>Check & Get Your Desired Product!</p>
    </div>
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 justify-center gap-[15px] mt-[20px] lg:mt-[30px]">
        {
            products.map((product,i)=>{
              return(
                <div
                onClick={() => router.push(`/single-product/${product.id}`)}
                className="bg-white relative h-full flex flex-col cursor-pointer shadow-md hover:shadow-lg transition duration-300 rounded-[5px]"
                >
                {/* Discount Badge */}
                <div className="absolute top-[10px] left-0 bg-[#6E2594] text-white text-[11px] px-2 py-1 xl:text-[12px] rounded-r-full flex items-center gap-1">
                                  <AiOutlineTag />
                                  Save: {product.discount}৳ (-{product.discount_percentage}%)
                                </div>
                                {product.gift  ?  <div className="absolute lg:flex hidden top-10 left-0 text-[10px] xl:text-[11px] bg-[#6E2594] text-white text-xs px-2 py-1 rounded-r-full  items-center gap-1">
                                  Gift: {product.gift}
                                </div>:""}
                {/* Product Image */}
                <div className="p-5 border-b-2 border-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full  object-contain mb-2"
                />
                </div>
                
                {/* Product Details */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <h4 className="text-[13px] lg:text-[14px] xl:text-[15px] font-[400] leading-[20px] xl:leading-[22px] text-gray-900 hover:text-icon_color hover:underline cursor-pointer">
                    {product.name}
                  </h4>
                
                  {/* Price Section */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-red-600 text-[15px] xl:text-[17px] font-[600] leading-[20px]">
                      {product.price}৳
                    </span>
                    <span className="text-gray-500 text-[13px] line-through">
                      {product.original_price}৳
                    </span>
                  </div>
                </div>
                </div>


              )
            })
        }
    </section>

    </section>
  );
};

const ProductList = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center p-6 bg-gray-100">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProduct;
