import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";


const categories = [
  {
    name: "Beauty",
    count: 6,
    subCategories: ["Skincare", "Makeup", "Haircare"],
  },
  {
    name: "Culture",
    count: 9,
    subCategories: ["History", "Traditions", "Art"],
  },
  {
    name: "Fashion",
    count: 3,
    subCategories: ["Casual", "Formal", "Streetwear"],
  },
  {
    name: "Music",
    count: 4,
    subCategories: ["Rock", "Pop", "Jazz"],
  },
  {
    name: "Sports",
    count: 4,
    subCategories: ["Football", "Basketball", "Tennis"],
  },
  {
    name: "Travel",
    count: 4,
    subCategories: ["Beaches", "Mountains", "Cities"],
  },
];


const tags = [
  { name: "Beauty", count: 6 },
  { name: "Culture", count: 9 },
  { name: "Fashion", count: 3 },
  { name: "Featured Posts", count: 3 },
  { name: "Food Genel", count: 1 },
  { name: "Magazine", count: 4 },
  { name: "Music", count: 4 },
  { name: "Sports", count: 4 },
  { name: "Technology", count: 3 },
  { name: "Travel", count: 4 },
  { name: "Video", count: 6 },
];
import { MdKeyboardArrowRight } from "react-icons/md";
export default function CategoriesTags() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="w-full pb-4">
      {/* Categories Section */}
      <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start items-center px-[10px] text-[12px] uppercase text-[#eee]">Categories</h2>
      <div className="w-full">
      {categories.map((category, index) => (
        <div key={index} className="border-b">
          {/* Category Header */}
          <div
            className="flex justify-between items-center px-3 py-2 cursor-pointer"
            onClick={() => setOpenCategory(openCategory === index ? null : index)}
          >
            <div className="flex items-center gap-2 font-medium text-gray-700 text-[14px]">
              <MdKeyboardArrowRight
                className={`transition-transform text-[18px] ${openCategory === index ? "rotate-90" : ""}`}
              />
              {category.name}
            </div>
            <span className="text-gray-500 text-[14px] font-medium">({category.count})</span>
          </div>

          {/* Subcategories (Show when active) */}
          {openCategory === index && (
            <div className="pl-6 py-1 transition-all">
              {category.subCategories.map((sub, subIndex) => (
                <p key={subIndex} className="text-gray-600 text-[13px] py-1 cursor-pointer hover:text-indigo-600">
                  - {sub}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
      
      {/* Tags Section */}
      <h2 className="bg-[#222222] font-[600] h-[32px] flex justify-start mt-[10px] items-center px-[10px] text-[12px] uppercase text-[#eee]">Tags</h2>
      <div className="flex flex-wrap gap-2 p-3 border border-gray-300">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 bg-[#f5f5f5] text-black px-2 py-1 rounded-[2px] text-[13px]"
          >
            {tag.name}
            <span className="bg-red-500 text-white px-[5px] py-[2px] text-[11px] rounded">({tag.count})</span>
          </span>
        ))}
      </div>
    </div>
  );
}
