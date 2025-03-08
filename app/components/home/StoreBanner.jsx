import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const StoreBanner = () => {
  return (
    <div className="mx-auto font-jost xl:max-w-[1300px] py-6 px-[15px] w-full flex justify-center items-center bg-gray-100">
    <div className="w-full flex flex-col md:flex-row justify-between items-center px-3 py-7 md:p-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-800 text-white text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <FaMapMarkerAlt className="text-[30px] lg:text-[35px] xl:text-4xl" />
        <div>
          <h2 className="text-[20px] xl:text-[25px] font-semibold">20+ Physical Stores</h2>
          <p className="text-base md:text-lg">Visit Our Store & Get Your Desired IT Product!</p>
        </div>
      </div>
      <button className="mt-4 md:mt-0 flex items-center gap-2 bg-[#EF9919] text-black rounded-full font-medium shadow-md hover:bg-orange-600 px-6 py-3 transition">
        Find Our Store <FaSearch />
      </button>
    </div>
  </div>
  );
};

export default StoreBanner;
