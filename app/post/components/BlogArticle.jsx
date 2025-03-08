import { FaFacebookF, FaTwitter, FaPinterestP, FaClock, FaTag } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
export default function BlogArticle() {
  return (
    <div className=" py-3 bg-white">
      {/* Header */}
      <h1 className="text-[18px] xl:text-[21px] 2xl:text-[25px] font-semibold ">Whether Article Spirits</h1>
      <div className="w-full h-[3px] mt-[10px] bg-gray-300 mb-[8px]">
            <div className="w-[20%] h-[3px] bg-gray-500"></div>
        </div>
      <div className="flex items-center text-sm text-gray-400 mt-1 space-x-2">
        <span className="font-[400]">Sora Blogging Tips</span>
        <FaClock />
        <span>9 years ago</span>
        <FaTag />
        <span>Beauty, Culture, Magazine</span>
      </div>
      
      {/* Image */}
      <div className="mt-4">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg"
          alt="Food platter"
          className="w-full"
        />
      </div>
      
      {/* Content */}
      <p className="mt-4 text-gray-700">
        It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation
        ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in
        jokes sense do do.
      </p>
      
      {/* Quote */}
      <blockquote className="mt-4 p-4 border-l-4 border-green-500 bg-gray-100 italic text-gray-600">
        "Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better."
      </blockquote>
      
      {/* Additional Content */}
      <p className="mt-4 text-gray-700">
        Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire
        settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end
        procuring.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Assistance imprudence yet sentiments</li>
        <li>Miss told ham dull knew see she spot near can spirit her entire</li>
        <li>Drawings offended yet answered.</li>
      </ul>
      
      <p className="mt-4 text-gray-700">
        Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age.
      </p>
      
      {/* Share Section */}
      <div className="mt-6  pt-4 ">
        <div className="flex justify-between items-center">
        <span className="text-gray-600 font-semibold block mb-2">SHARE THIS</span>
        <div className="flex space-x-2">
          <a href="#" className="flex items-center space-x-1   bg-blue-600 text-[14px]  text-white px-3 py-1 rounded-[3px] hover:bg-blue-800">
            <FaFacebookF className="text-[18px]" />
            <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-1 bg-blue-400 text-white text-[14px]  px-3 py-1 rounded-[3px] hover:bg-blue-600">
            <FaTwitter  className="text-[18px]"/>
            <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-1 bg-red-600 text-white text-[14px] px-3 py-1 rounded-[3px] hover:bg-red-800">
            <FaPinterestP  className="text-[18px]"/>
          </a>
          <a href="#" className="flex items-center space-x-1 bg-blue-600 text-white text-[14px] px-3 py-1 rounded-[3px] hover:bg-red-800">
            <FaLinkedinIn  className="text-[18px]"/>
          </a>
          <a href="#" className="flex items-center space-x-1 bg-green-500 text-white text-[14px] px-3 py-1 rounded-[3px] hover:bg-red-800">
            <IoLogoWhatsapp className="text-[18px]" />
          </a>
        </div>
        </div>
    
        <div className="w-full h-[4px] mt-[10px] bg-gray-500">
            <div className="w-[20%] h-[4px] bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}
