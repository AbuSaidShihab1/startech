import { FaLinkedin, FaXTwitter, FaRss } from "react-icons/fa6";

export default function ProfileCard() {
  return (
    <div className="w-[100%] lg:w-[40%] bg-[#F8F9FA] border-[1px] border-[#eee] p-6 h-full">
      <div className="flex flex-col items-center">
      <div className="relative mb-[20px]">
      <img
          src="https://searchengineland.com/wp-content/seloads/2024/07/Danny-Goodwin-scaled.jpeg.webp"
          alt="Danny Goodwin"
          className="rounded-full w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] border-2 border-blue-500"
        />
        <span className="bg-blue-500 absolute bottom-[-8%] left-[40%] text-white text-[13px] lg:text-[15px] px-2 py-[2px] rounded-[4px] mt-2">Staff</span>

      </div>
        <h1 className="text-[21px] lg:text-[22px] xl:text-[24px] font-bold mt-2">Danny Goodwin</h1>
        <p className="text-gray-600 text-[16px] mt-[4px]">Editorial Director</p>
        <button className="bg-gray-800 w-full text-white px-4 py-2 rounded-[5px] mt-3">Email</button>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-[16px] lg:text-lg font-semibold">Company</h3>
        <p className="text-gray-700">Search Engine Land & SMX</p>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-[16px] lg:text-lg font-semibold">Connect</h3>
        <div className="flex gap-3 mt-2 text-blue-600">
          <FaLinkedin className="text-2xl cursor-pointer" />
          <FaXTwitter className="text-2xl cursor-pointer" />
          <FaRss className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-[16px] lg:text-lg font-semibold mb-2">Speaking Experience</h3>
        <span className="bg-blue-200 text-blue-800  px-2 py-1 text-sm rounded">SMX</span>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-[16px] lg:text-lg font-semibold mb-2">Qualifications & Certifications</h3>
        <span className="bg-blue-500 text-white  px-3 py-1 text-sm rounded">Journalism Associate</span>
      </div>
    </div>
  );
}
