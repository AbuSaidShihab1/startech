import { MdCall, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='w-full bg-[#081621] text-white font-jost pb-[70px] xl:pb-0'>
      <div className='mx-auto px-[15px] w-full xl:max-w-[1300px] flex lg:flex-row flex-col lg:gap-[20px] xl:gap-0 gap-[30px] justify-center lg:justify-between py-10 md:px-3'>
        {/* Support Section */}
        <div className='w-full sm:w-[48%] md:w-[50%] lg:w-[30%] xl:w-[28%] 2xl:w-[22%] mb-6 md:mb-0'>
          <h1 className='text-[15px] lg:text-[16px] uppercase mb-5 '>Support</h1>
          <div className='flex items-center rounded-full border border-gray-600 hover:border-icon_color cursor-pointer p-2'>
            <MdCall className='text-[20px] md:text-[28px]' />
            <div className='ml-4'>
              <p className='text-sm md:text-[13px] text-[#838383]'>9AM - 8PM</p>
              <h5 className='text-[13px]  md:text-[14px] xl:text-[20px] text-icon_color'>16793</h5>
            </div>
          </div>
          <div className='flex items-center mt-4 rounded-full border border-gray-600 hover:border-icon_color cursor-pointer p-2'>
            <MdLocationOn className='text-[20px] md:text-[28px]' />
            <div className='ml-4'>
              <p className='text-sm md:text-[13px] text-[#838383]'>Store Locator</p>
              <h5 className='text-[13px]  md:text-[14px] xl:text-[20px] text-icon_color'>Find Our Stores</h5>
            </div>
          </div>
        </div>
        
        {/* About Us Section */}
        <div className='w-full sm:w-[48%] md:w-[22%] mb-6 md:mb-0'>
          <h1 className='text-[15px] lg:text-[16px] uppercase mb-5'>About Us</h1>
          <ul className='text-gray-400 space-y-2 text-sm md:text-[14px]'>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Affiliate Program</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Online Delivery</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Refund and Return Policy</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Blog</li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className='w-full sm:w-[48%] md:w-[22%] mb-6 md:mb-0'>
          <h1 className='text-[15px] lg:text-[16px] uppercase mb-5'>Policies</h1>
          <ul className='text-gray-400 space-y-2 text-sm md:text-[14px]'>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>EMI Terms</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Privacy Policy</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Star Point Policy</li>
            <li className='hover:underline hover:text-icon_color cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className='w-full sm:w-[48%] md:w-[22%]'>
          <h1 className='text-[15px] lg:text-[16px] uppercase mb-5'>Stay Connected</h1>
          <p className='font-[500] text-base mb-2 md:text-[17px]'>Star Tech Ltd</p>
          <p className='text-gray-400 text-sm md:text-[14px]'>Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000</p>
          <h4 className='mt-2 mb-2 text-gray-400 text-base md:text-[16px]'>Email:</h4>
          <a href='mailto:webteam@startechbd.com' className='text-icon_color hover:underline text-sm md:text-base'>webteam@startechbd.com</a>
        </div>
      </div>
      
      {/* Mobile App Section */}
      <div className="mt-10 text-center mx-auto w-full px-[15px] xl:max-w-[1300px] text-gray-400 border-t border-gray-600 border-b py-5 flex flex-col xl:flex-row gap-[8px] lg:gap-[8px] justify-center sm:justify-between items-center sm:px-5 text-xs sm:text-sm md:text-base">
      {/* Mobile App Buttons */}
      <p className="text-xs sm:text-[13px] lg:hidden">Experience Star Tech App on your mobile:</p>

      <div className="flex flex-col  sm:flex-row justify-center items-center gap-3 sm:gap-4">
      <p className="text-xs lg:flex hidden sm:text-[13px]">Experience Star Tech App on your mobile:</p>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-gray-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm">
            <FaGooglePlay className="text-[16px] sm:text-[16px]" />
            <div>
              <p className="text-[8px] sm:text-[10px] md:text-[10px] text-gray-300">Download On</p>
              <p className="text-xs sm:text-[10px] md:text-[13px]">Google Play</p>
            </div>
          </button>
          <button className="flex items-center gap-2 border border-gray-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm">
            <FaApple className="text-[16px] sm:text-[20px]" />
            <div>
              <p className="text-[8px] sm:text-[10px] md:text-[10px] text-gray-300">Download On</p>
              <p className="text-xs sm:text-[10px] md:text-[13px]">App Store</p>
            </div>
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4 sm:mt-5 lg:mt-0">
        {[FaWhatsapp, FaFacebookF, FaInstagram].map((Icon, index) => (
          <div
            key={index}
            className="p-[9px] bg-gray-700 flex justify-center items-center rounded-full cursor-pointer hover:bg-indigo-500 transition-all duration-200"
          >
            <Icon className="text-white text-[18px] sm:text-[23px]" />
          </div>
        ))}
      </div>
    </div>
      {/* Copyright Section */}
      <div className='mx-auto max-w-[1300px] text-gray-400 text-sm md:text-[12px] flex flex-wrap justify-center sm:justify-between items-center py-4 px-5'>
        <p className='text-center sm:text-left'>&copy; 2025 Star Tech Ltd | All rights reserved</p>
        <p className='text-center sm:text-left'>Powered By: Star Tech</p>
      </div>
    </section>
  );
};

export default Footer;