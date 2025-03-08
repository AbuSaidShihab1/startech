import React from "react";
import { FaShoppingCart, FaBalanceScale } from "react-icons/fa";
import { LuCopyPlus } from "react-icons/lu";
const products = [
  {
    id: 1,
    name: "iPhone 15",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-16/iphone-16--228x228.webp",
    discount: 37999,
    price: 122000,
    oldPrice: 159999,
    features: [
      "Display: 6.1\" Super Retina XDR OLED Display",
      "Processor: A16 Bionic Chip, Storage: 128GB",
      "Camera: 48MP + 12MP Rear, 12MP Front",
    ]
  },
  {
    id: 2,
    name: "iPhone 15 Plus",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-16/iphone-16--228x228.webp",
    discount: 11500,
    price: 148500,
    oldPrice: 160000,
    features: [
      "Display: 6.7\" Super Retina XDR OLED Display",
      "Processor: A16 Bionic Chip, Storage: 128GB",
      "Camera: 48MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0"
    ]
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-plus/iphone-15-plus-black-228x228.webp",
    discount: 7900,
    price: 152000,
    oldPrice: 159900,
    features: [
      "Display: 6.1\" Super Retina XDR OLED Display",
      "Processor: A17 Pro Chip, Storage: 128GB",
      "Camera: 48MP + 12MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0, Titanium Design"
    ]
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-14-pro-max/deep-purple/iphone-14-pro-max-deep-purple-228x228.webp",
    discount: 8900,
    price: 157000,
    oldPrice: 165900,
    features: [
      "Display: 6.7\" Super Retina XDR OLED Display",
      "Processor: A17 Pro Chip, Storage: 256GB",
      "Camera: 48MP + 12MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0, Titanium Design"
    ]
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-pro/natural-titanium/iphone-15-pro-natural-titanium-official-228x228.jpg",
    discount: 7900,
    price: 182000,
    oldPrice: 189900,
    features: [
      "Display: 6.1\" Super Retina XDR OLED Display",
      "Processor: A17 Pro Chip, Storage: 256GB",
      "Camera: 48MP + 12MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0, Titanium Design"
    ]
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-16-pro/iphone-16-pro--228x228.webp",
    discount: 8900,
    price: 180000,
    oldPrice: 188900,
    features: [
      "Display: 6.7\" Super Retina XDR OLED Display",
      "Processor: A17 Pro Chip, Storage: 256GB",
      "Camera: 48MP + 12MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0, Titanium Design"
    ]
  },
  {
    id: 7,
    name: "iPhone 15 Pro Max",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-pro-max/natural-titanium/iphone-15-pro-max-natural-titanium-official-228x228.jpg",
    discount: 11500,
    price: 218500,
    oldPrice: 230000,
    features: [
      "Display: 6.7\" Super Retina XDR OLED Display",
      "Processor: A17 Pro Chip, Storage: 512GB",
      "Camera: 48MP + 12MP + 12MP Rear, 12MP Front",
      "Features: Dynamic Island, Face ID, eSIM, USB Type-C 3.0, Titanium Design"
    ]
  },
  {
    id: 8,
    name: "iPhone 14 Plus",
    image: "https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-16-plus/iphone-16-plus--228x228.webp",
    discount: 0,
    price: 0,
    oldPrice: 0,
    features: [
      "Display: 6.7\" Super Retina XDR OLED Display",
      "Processor: A15 Bionic Chip, Storage: 128GB",
      "Camera: 12MP + 12MP Rear, 12MP Front",
      "Features: Face ID, eSIM, Lightning Port"
    ],
    outOfStock: true
  }
];


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-[5px] h-auto flex flex-col justify-between relative">
  {/* Discount Tag */}
  <span className="absolute top-2 left-0 bg-purple-600 text-white px-2 py-1 rounded-r-full text-xs font-semibold">
    Save: {product.discount}৳
  </span>

  {/* Image Section */}
  <div className="border-b-[1px] border-[#eee]">
    <img
      src={product.image}
      alt={product.name}
      className="mx-auto my-2 w-[80%]"
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col flex-grow justify-between">
    {/* Features Section (Fixed Height) */}
    <div className="border-b-[1px] border-[#eee] px-[15px] py-[10px] flex-grow min-h-[120px]">
      <h2 className="text-[15px] 2xl:text-lg font-[600] mb-[10px] text-gray-900">{product.name}</h2>
      <ul className="text-[13px] 2xl:text-sm text-gray-700">
        {product.features.map((feature, index) => (
          <li key={index} className="list-disc ml-2 xl:ml-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Price & Actions */}
    <div className="px-[13px] xl:px-[20px] py-[10px]">
      <div className="flex justify-center items-center gap-2 text-red-600 text-xl">
        <span className="text-[17px] font-[600]">{product.price}৳</span>
        <span className="line-through text-gray-500 text-sm">{product.oldPrice}৳</span>
      </div>

      {/* Buttons */}
      <button className="mt-3 bg-[#F5F6FC] hover:bg-indigo-600 text-[15px] text-indigo-600 hover:text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2">
        <FaShoppingCart /> Buy Now
      </button>
      <button className="mt-2 text-gray-700 px-4 py-2 rounded w-full text-[15px] flex items-center justify-center gap-2">
        <LuCopyPlus /> Add to Cart
      </button>
    </div>
  </div>
</div>

  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[10px] bg-gray-100 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
