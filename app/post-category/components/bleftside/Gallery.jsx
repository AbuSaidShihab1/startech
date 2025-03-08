import { FaRss, FaUser, FaHeart } from "react-icons/fa";
import { TbNews } from "react-icons/tb";
const Gallery = () => {
  const images = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB2mUOJ3KKoUtJOHfqNgDGzErJD7U6WMmiY67_iW5Y010Ju96vgn-YnWaEseVrd3GGHMjTSSmUOYGbg_vuntDdSUPjaLgs-jhEXtUvE3gdgxP5jKDwu03NqCx1QR-awrWsOgIpN0Mz3RGz/s1600/45.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfF05r9f6faBb0IgAKeEvE8GX1dompuOCdbAOLo3LoyKsUvBggeuq25zVw32iurDXpn57nLwAvJ4QlD77C9bjCqRecydI82dvNIbXsJj18PyRd_VO0q_4k0FD5EO-LSOd98d4yZ13HB7ps/s1600/32.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb5wySpLrQJpwKRqvSQQQHxZRAQPfE-kZsn2PAS6TN81aOn2piSf7szrwYA9NU9WVJXrFiVBb4QdM82pZIh60RXtVsw3R3puQTNfRtZELAqmy0CCFeBZ_lSvp_LEHBsQE_PNwjPRvu8uQU/s1600/85.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAWQTgEfcf2QpOu3VqVleeByeEWKB-XM1g9CAMoEiv2BU3Fo5Dg-Y1ZqbHBlm7jJz5-XHI_LOaWiiLdJ_0fOFD8q5M-3PL3eHFMMmtt2e5bXbZFUCdg9IMq9cfXGJmawZAM1hCyR6AhfP/s1600/11.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Ay6myMmaOomlLVlMpz8P1_J5IR65hvm2SImsH1Hy9ivHOKRoBWW5AEudImj9Xht1qaZQ-FpfRx0eQ2Qw2QJ9lzyeYwjW0qTsTmBdGDg48457K1CNVkFjga-Aq0AjQAjOjnb2U48Zdz1i/s1600/65.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Ay6myMmaOomlLVlMpz8P1_J5IR65hvm2SImsH1Hy9ivHOKRoBWW5AEudImj9Xht1qaZQ-FpfRx0eQ2Qw2QJ9lzyeYwjW0qTsTmBdGDg48457K1CNVkFjga-Aq0AjQAjOjnb2U48Zdz1i/s1600/65.jpg",
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#1a1a1a] text-white h-[40px]">
      {/* Left Section with Icon */}
      <div className="flex justify-start items-center gap-[10px] h-[40px]">
      <div className="flex items-center bg-[#e74c3c] px-3 h-full">
        <FaRss className="text-white text-lg" />
      </div>

      {/* Middle Text */}
      <div className="flex-1 text-center uppercase font-bold text-xs tracking-wider">
      Gallery
      </div>
      </div>

      {/* Right Section with Button */}
      <button className="flex justify-center items-center text-xs tracking-wider px-[10px] h-[40px] bg-gray-800">
        VIEW MORE
      </button>
    </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg">
            <img src={img} alt="Gallery Item" className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-sm font-semibold leading-tight">Sample Title {index + 1}</h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-200">
                <FaUser />
                <span>Sora Blogging Tips</span>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white p-1 opacity-50">
              <TbNews />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
