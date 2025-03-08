import React from "react";
import { FaBalanceScale } from "react-icons/fa";

const products = [
  { id:1,
    image1: "https://www.startech.com.bd/image/cache/catalog/monitor/msi/g255pf-e2/g255pf-e2-01-200x200.webp",
    image2: "https://www.startech.com.bd/image/cache/catalog/monitor/gigabyte/g24f-2/g24f-2-01-200x200.webp",
    name1: "MSI G255PF E2 24.5\" 180Hz 1ms IPS FHD Gaming",
    name2: "GIGABYTE G24F 2 23.8\" 180Hz Full HD IPS Gaming",
    price1: "26,800৳",
    price2: "24,500৳",
  },
  { id:2,
    image1: "https://www.startech.com.bd/image/cache/catalog/smartwatch/amazfit/pop-3s/pop-3s-200x200.webp",
    image2: "https://www.startech.com.bd/image/cache/catalog/smart-watch/kieslect/ks-pro/ks-pro-01-200x200.webp",
    name1: "Amazfit Pop 3S",
    name2: "Kieslect KS Pro Smart Watch",
    price1: "5,999৳",
    price2: "6,290৳",
  },
  {
    id:3,
    image1: "https://www.startech.com.bd/image/cache/catalog/earbuds/oraimo/spacebuds-z/spacebuds-z-anc-tahsan-200x200.webp",
    image2: "https://www.startech.com.bd/image/cache/catalog/earbuds/oneplus/nord-buds-2r/nord-buds-2r-01-200x200.webp",
    name1: "Oraimo SpaceBuds Z ANC TWS Earbuds (OTW-",
    name2: "OnePlus Nord Buds 2R",
    price1: "5,999৳",
    price2: "6,290৳",
  },
  {
    id:4,
    image1: "https://www.startech.com.bd/image/cache/catalog/mobile/xiaomi/redmi-note-14-4g/redmi-note-14-midnight-black-200x200.webp",
    image2: "https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-ce4-lite/nord-ce4-lite-mega-blue-001-200x200.webp",
    name1: "Amazfit Pop 3S",
    name2: "Kieslect KS Pro Smart Watch",
    price1: "5,999৳",
    price2: "6,290৳",
  },

];

const ProductComparison = () => {
  return (
    <section className='px-[15px] w-full mx-auto xl:max-w-[1300px] py-[30px] font-jost'>
        <div className='text-center'>
            <h2 className='text-[18px] xl:text-[25px] font-[600]'>Featured Comparisons</h2>
            <p className='text-[14px] xl:text-[16px] mt-[4px]'>Compare & Choose Your Desired Product!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto mt-[20px] lg:mt-[30px]">
      {products.map((product, index) => (
        <div className="bg-white p-2 sm:p-3 flex justify-between flex-col" key={index}>
          <div className="w-full flex gap-2 sm:gap-4 h-full">
            <div className="w-1/2 text-center flex justify-between flex-col">
              <div>
                <img className="w-[100px] sm:w-[130px] m-auto" src={product.image1} alt="" />
                <h4 className="mt-2 sm:mt-3 text-xs sm:text-sm">
                  <a href="#" className="text-center">
                    {product.name1}
                  </a>
                </h4>
              </div>
              <p className="mt-1 sm:mt-2 text-red-600 font-bold text-sm sm:text-base">{product.price1}</p>
            </div>
            <div className="flex items-center">
              <div className="w-[1px] h-full bg-gray-200 flex justify-center items-center">
                <span className="bg-[#3749BB] rounded text-[10px] sm:text-xs text-white p-1 sm:p-2">VS</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between h-full">
              <div>
                <img className="w-[100px] sm:w-[130px] m-auto" src={product.image2} alt="" />
                <h4 className="mt-2 sm:mt-3 text-xs sm:text-sm text-center">
                  <a href="#" className="text-center">
                    {product.name2}
                  </a>
                </h4>
              </div>
              <p className="mt-1 sm:mt-2 text-red-600 text-center text-[15px] xl:text-[17px] font-[600]  text-sm sm:text-base">{product.price2}</p>
            </div>
          </div>
          <button className="w-full py-2 sm:py-3 mt-3 sm:mt-4 bg-[#F5F6FC] text-[#3749BB] text-sm sm:text-base hover:bg-[#3749BB] transition-all duration-200 hover:text-white rounded-md">
            Full Comparison
          </button>
        </div>
      ))}
    </div>
   </section>
  );
};

export default ProductComparison;