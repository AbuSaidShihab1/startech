"use client";
import React, { useState,useEffect} from "react";
import { HiSearch } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBolt, FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { FaShoppingCart, FaBalanceScale } from "react-icons/fa";
import { MdFilter9Plus } from "react-icons/md";
import { PiPlusFill } from "react-icons/pi";
import { MdShoppingBasket } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoClose, IoTrash } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGift } from 'react-icons/fa';
import { MdCompare, MdComputer } from 'react-icons/md';
import { useRouter } from "next/navigation"; 
import Registration from "./modal/Registration";

const menuItems = [
  { name: "Desktop", link: "#" },
  { name: "Laptop", link: "#" },
  {
    name: "Component",
    link: "#",
    submenu: [
      {
        name: "Processor",
        link: "#",
      },
      {
        name: "CPU Cooler",
        link: "#",
        subsubmenu: [
          "Antec", "Gamdias", "Xtreme", "Lian Li", "TEAM", "Corsair",
          "MSI", "Gigabyte", "NZXT", "Thermalright", "Thermaltake",
          "Cooler Master", "Cougar", "Asus", "Deepcool", "1STPLAYER",
          "Xigmatek", "AMD", "Value-Top", "ARCTIC", "Huntkey"
        ]
      },
      {
        name: "Motherboard",
        link: "#",
      },
      {
        name: "Graphics Card",
        link: "#",
      },
      { name: "Show All Component", link: "#" },
    ],
  },
  { name: "Monitor", link: "#" },
  { name: "UPS", link: "#" },
  { name: "Phone", link: "#" },
  { name: "Tablet", link: "#" },
  { name: "Office Equipment", link: "#" },
  { name: "Camera", link: "#" },
  { name: "Networking", link: "#" },
  { name: "Software", link: "#" },
  { name: "Server & Storage", link: "#" },
  { name: "Accessories", link: "#" },
  { name: "Gadget", link: "#" },
  { name: "Gaming", link: "#" },
  { name: "TV", link: "#" },
];
// -----------------bottom-tab----------------
const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center text-gray-400 hover:text-white cursor-pointer text-xs md:text-sm">
      <div className="text-lg md:text-xl">{icon}</div>
      <span className="mt-1">{label}</span>
    </div>
  );
};

export default function Header() {
  const router=useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const { cart, totalPrice, removeFromCart, updateQuantity } = useCart();
  const stickyThreshold = 50; // Adjust the threshold before becoming sticky
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("secondNav");
      if (nav) {
        const navOffset = nav.offsetTop;
        setIsSticky(window.scrollY >= navOffset - stickyThreshold && window.scrollY > 0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// --------------------compare-box==================

// Menu Data with Submenus, Sub-Submenus & Sub-Sub-Submenus
const menuData = [
  {
    title: "Desktop",
    subItems: [
      { title: "Desktop Offer" },
      {
        title: "Star PC",
        subItems: [
          {
            title: "Entry Level",
            subItems: [
              { title: "Basic" },
              { title: "Advanced" },
            ],
          },
          {
            title: "Gaming Series",
            subItems: [
              { title: "Budget Gaming" },
              { title: "High-End Gaming" },
            ],
          },
        ],
      },
      {
        title: "Gaming PC",
        subItems: [
          { title: "Budget Gaming" },
          {
            title: "Extreme Gaming",
            subItems: [
              { title: "RTX Series" },
              { title: "Liquid Cooling" },
            ],
          },
        ],
      },
      { title: "Brand PC" },
      { title: "All-in-One PC" },
      { title: "Portable Mini PC" },
    ],
  },
  { title: "Laptop" },
  { title: "Component" },
  { title: "Monitor" },
];
const [openMenus, setOpenMenus] = useState({});

const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

const toggleMenu = (menuPath) => {
  setOpenMenus((prev) => ({
    ...prev,
    [menuPath]: !prev[menuPath],
  }));
};

// Recursive Menu Renderer
const renderMenu = (items, path = "") => (
  <ul className={`pl-4 ${path ? "border-l border-gray-300" : ""}`}>
    {items.map((item, index) => {
      const currentPath = `${path}${index}`;
      return (
        <li key={currentPath}>
          <div
            className="p-2 flex justify-between cursor-pointer text-gray-700 hover:text-red-500"
            onClick={() => item.subItems && toggleMenu(currentPath)}
          >
            {item.title}
            {item.subItems &&
              (openMenus[currentPath] ? <AiOutlineMinus /> : <AiOutlinePlus />)}
          </div>

          {item.subItems && openMenus[currentPath] && renderMenu(item.subItems, currentPath)}
        </li>
      );
    })}
  </ul>
);

const [isOpen, setIsOpen] = useState(false);
const [cartVisible, setCartVisible] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuTitle) =>
    setOpenSubmenu(openSubmenu === menuTitle ? null : menuTitle);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="font-jost  w-full bg-[#0D1726] text-white z-[100]">
 {/* Floating Compare & Cart Buttons */}
 {/* ----------------bottom-tab-------------- */}
 <div className="fixed xl:hidden z-[100] px-[15px] bottom-0  left-0 w-full bg-gray-900 text-white flex justify-around py-3 border-t border-gray-700">
      <NavItem icon={<FaGift />} label="Offers" />
      <NavItem icon={<FaBolt />} label="18th Deals" />
      <NavItem icon={<MdComputer />} label="PC Builder" />
      <NavItem icon={<MdCompare />} label="Compare (0)" />
      <NavItem icon={<FaUser />} label="Account" />
    </div>
 {/* ------------bottom-tab------------- */}
 <div className="fixed bottom-5 right-5 flex flex-col space-y-2 z-[200]">
 <div className="relative xl:flex hidden">
      {/* Trigger Button */}
      <div
        onClick={togglePopup}
        className="relative flex items-center justify-center border-[1px] border-gray-600 hover:bg-indigo-500 hover:text-white flex-col bg-[#081621] text-white w-[62px] h-[59px] rounded-[5px] cursor-pointer"
      >
        <PiPlusFill size={24} />
        <p className="text-[10px] uppercase mt-[4px]">Compare</p>
        <span className="absolute top-[-10%] right-[-10%] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          1
        </span>
      </div>

      {/* Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-[87px] right-3 bg-white shadow-lg w-[360px]  z-50 "
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-[#081621] text-white px-[20px] py-[13px]">
            <h2 className="text-[16px] font-[500]">Compare Product</h2>
            <IoClose
              className="cursor-pointer text-white"
              onClick={togglePopup}
              size={18}
            />
          </div>

          {/* Product List */}
          <div className="">
            {/* Product 1 */}
            <div className="flex items-center justify-between py-[15px] hover:bg-gray-50 p-2 border-b-[1px] ">
              <div className="flex items-center gap-3">
                <div className="px-[10px]">
                <img
                  src="https://www.startech.com.bd/image/cache/catalog/earbuds/oraimo/spacebuds-z/spacebuds-z-anc-tahsan-47x47.webp"
                  alt="Oraimo SpaceBuds Z"
                  className="w-10 h-10 object-cover rounded"
                />
                </div>
                <span className="text-[14px] text-black">
                  Oraimo SpaceBuds Z ANC TWS Earbuds (OTW-625)
                </span>
              </div>
              <MdDelete className="cursor-pointer text-[22px] text-gray-500 hover:text-red-500"  />
            </div>
            <div className="flex items-center justify-between py-[15px] hover:bg-gray-50 p-2 border-b-[1px] ">
              <div className="flex items-center gap-3">
                <div className="px-[10px]">
                <img
                  src="https://www.startech.com.bd/image/cache/catalog/earbuds/oraimo/spacebuds-z/spacebuds-z-anc-tahsan-47x47.webp"
                  alt="Oraimo SpaceBuds Z"
                  className="w-10 h-10 object-cover rounded"
                />
                </div>
                <span className="text-[14px] text-black">
                  Oraimo SpaceBuds Z ANC TWS Earbuds (OTW-625)
                </span>
              </div>
              <MdDelete className="cursor-pointer text-[22px] text-gray-500 hover:text-red-500"  />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between px-4 py-2">
            <button className="text-gray-500 text-[15px]">Clear</button>
            <button className="bg-indigo-600 text-white px-4 py-[10px] text-sm rounded hover:bg-indigo-700">
              Compare Now
            </button>
          </div>
        </motion.div>
      )}
    </div>
 {/* Cart Button */}
      <div
        className="relative  items-center  xl:flex hidden justify-center flex-col hover:bg-indigo-500 hover:text-white 
                  bg-[#081621] text-white w-[62px] h-[59px] rounded-[5px] cursor-pointer border-[1px] border-gray-600 "
        onClick={() => setCartVisible(true)}
      >
        <MdShoppingBasket size={24} />
        <p className="text-[10px] uppercase mt-[4px]">Cart</p>
        <span className="absolute top-[-10%] right-[-10%] bg-red-500 text-white text-xs w-5 h-5 
                        flex items-center justify-center rounded-full">
          {cart?.length}
        </span>
      </div>

      {/* Overlay */}
      {cartVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setCartVisible(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
      initial={{ x: "100%" }}
      animate={{ x: cartVisible ? "0%" : "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed top-0 right-0 h-full w-[60%] md:w-[45%] lg:w-[40%] xl:w-[350px] bg-white shadow-lg z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-[#081621] text-white p-4">
        <h2 className="text-[15px] font-[500] ">YOUR CART</h2>
        <button onClick={() => setCartVisible(false)} className="text-2xl">×</button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="flex items-center justify-center text-gray-600 text-[15px] h-full">
            Your shopping cart is empty!
          </div>
        ) : (
          cart.map((item) => (
            <div className="flex items-center justify-between border-b py-4 w-full">
            {/* Left Section - Image & Product Info */}
            <div className="flex justify-center gap-2 w-full">
              {/* Product Image */}
             <div className="w-[25%] h-full flex justify-center p-[10px] items-center border-[1px] border-gray-200">
             <img src={item.images.main} alt={item.name} className="w-full h-full rounded" />
             </div>
      
              {/* Product Info */}
              <div className="w-full px-[10px]">
                
                {/* Name & Remove Button */}
                <div className="flex justify-between items-center">
            <div>
            <p className="text-gray-900 mb-[7px] font-semibold text-[15px] leading-tight">
                    {item.name}
                  </p>
                    {/* Right Section - Quantity Controls */}
            <div className="flex items-center border  mb-[7px] text-gray-900 font-semibold">
              <button
                onClick={() => updateQuantity(item.id, "decrease")}
                className="px-3 py-1 border-r hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-1">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, "increase")}
                className="px-3 py-1 border-l hover:bg-gray-200"
              >
                +
              </button>
            </div>
            </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-500 text-[18px]"
                  >
                    <IoMdClose />
                  </button>
                </div>
      
                {/* Price Calculation */}
                <div className="flex items-center gap-3 mt-2 font-[500] text-gray-800 text-[15px]">
                  <p>৳{item.price.toLocaleString()}</p>
                  <span className="text-gray-500">×</span>
                  <p>{item.quantity}</p>
                  <span className="text-gray-500">=</span>
                  <p>৳{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </div>
      
          
          </div>
      
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-white">
        {/* Promo Code */}
        <div className="flex items-center border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-1 p-2 outline-none text-gray-700"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 text-sm font-[500]">
            Apply
          </button>
        </div>

        {/* Total Price */}
        <div className="mt-3 text-gray-900 font-semibold space-y-2">
          <div className="flex justify-between text-sm lg:text-[14px]">
            <span>Sub-Total</span>
            <span className="font-[600]">৳{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[16px] xl:text-[18px] 2xl:text-lg border-t pt-2">
            <span>Total</span>
            <span className="font-[600]">৳{totalPrice.toLocaleString()}</span>
          </div>
          {
            cart.length > 0 ? <button className="w-full py-[10px] bg-orange-500 text-white cursor-pointer text-[15px] xl:text-[16px] rounded-[4px] font-[500]">Checkout</button>:""
          }
        </div>
      </div>
    </motion.div>
        </div>
    <nav    className="w-full mx-auto xl:max-w-[1300px] px-[15px]  flex justify-between items-center py-[12px] xl:py-[15px] transition-all duration-300">

      {/* ---------------------menu------------------- */}
 {/* Menu Icon */}
  {/* Menu Icon (Floating) */}
  <div
        className="xl:hidden text-[22px] cursor-pointer "
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <IoClose /> : <GrMenu />}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Sidebar Header with Close Icon */}
        <div className="flex justify-end bg-[#0D1726] items-center p-4 ">
          <IoClose
            className="text-2xl cursor-pointer text-right text-white hover:text-gray-200"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Menu */}
        <div className="p-2 space-y-1">{renderMenu(menuData)}</div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30" onClick={toggleSidebar}></div>
      )}
      {/* --------------------menu------------------------ */}
      <div className="logo cursor-pointer" onClick={()=>{router.push("/")}}>
        <img
          src="https://www.startech.com.bd/image/catalog/logo.png"
          alt="Star Tech"
          className="w-auto h-[35px] xl:h-[52px]"
        />
      </div>
     {/* --------------------search-in-mobile----------------- */}
          <div className=" flex xl:hidden justify-center items-center gap-[15px]">
      {/* Search Icon and Full-width Search Bar */}
<div className="relative">
  {/* Search Icon */}
  <div
    className="cursor-pointer p-2"
    onClick={() => setShowSearchBar(!showSearchBar)}
  >
    <IoSearchSharp className="text-[24px]" />
  </div>

  {/* Search Bar */}
  {showSearchBar && (
    <div className="fixed top-[6%] left-0 w-full bg-white shadow-lg p-2 border-t border-gray-300 z-[999]">
      <div className="flex items-center justify-between p-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="ml-2 text-gray-600 hover:text-gray-900"
          onClick={() => setShowSearchBar(false)}
        >
          <IoClose size={24} />
        </button>
      </div>
    </div>
  )}
</div>

          <div
        className="relative flex items-center justify-center flex-col  hover:text-white text-white cursor-pointer "
        onClick={() => setCartVisible(true)}
      >
        <MdOutlineShoppingBasket size={24} />
        <span className="absolute top-[-30%] right-[-50%] bg-red-500 text-white text-xs w-4 h-4 
                        flex items-center justify-center rounded-full">
          {cart?.length}
        </span>
      </div>
          </div>
     {/* ------------------search-in-mobile---------------------- */}
      <div className="hidden xl:flex bg-white text-gray-700 px-4 py-[8px] h-[45px] border-none rounded-[4px] border-2 w-[500px] items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-transparent text-sm"
        />
        <HiSearch className="text-gray-500" size={20} />
      </div>

      <div className=" hidden xl:flex items-center space-x-6">
        <div className="flex items-center space-x-3 cursor-pointer">
          <IoBagHandleOutline className="text-[24px] text-icon_color" />
          <div>
            <h5 className="text-[15px] font-semibold">Offers</h5>
            <p className="text-[11px] text-gray-400">Latest Offers</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <FaBolt className="text-[24px] text-icon_color" />
          <div>
            <h5 className="text-[15px] font-semibold">Happy Hour</h5>
            <p className="text-[11px] text-gray-400">Special Deals</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setModalOpen(true)}>
          <FaUser className="text-[24px] text-icon_color" />
          <div>
            <h5 className="text-[15px] font-semibold">Account</h5>
            <p className="text-[11px] text-gray-400">Register or Login</p>
          </div>
        </div>
        <Registration isOpen={isModalOpen} onClose={() => setModalOpen(false)} />


        <button className="bg-gradient-to-r leading-[38px] from-blue-500 to-indigo-600 text-white px-[25px] py-[5px] rounded-md text-sm font-semibold">
          PC Builder
        </button>
      </div>
    </nav>

    <nav
  id="secondNav"
  className={`bg-white xl:flex w-full hidden text-black px-[15px] shadow-md py-[10px] transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full z-[100] shadow-lg" : "relative"}`}
>
  <div className="mx-auto w-full xl:w-[1300px] flex justify-between space-x-6 py-2 text-sm font-semibold z-[100]">
    {menuItems.slice(0, 15).map((item, index) => ( // Show only first 4 items on lg screens
      <div
        key={index}
        className="relative z-[100]"
        onMouseEnter={() => setOpenMenu(item.name)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <a href={item.link} className={item.name === "Component" ? "hover:text-blue-500 text-now text-nowrap text-red-500" : " text-nowrap hover:text-blue-500"}>
          {item.name}
        </a>
        {item.submenu && openMenu === item.name && (
          <div className="absolute top-4 pt-[20px] left-0">
            <div className="w-[220px] bg-white text-black shadow-lg border-t-2 border-orange-500">
              {item.submenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="relative flex justify-between items-center mt-[2px] hover:bg-icon_color hover:text-white transition-all duration-150"
                  onMouseEnter={() => setOpenSubMenu(subItem.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  <a href={subItem.link} className="block px-3 text-nowrap py-[5px] text-[14px] w-full">
                    {subItem.name}
                  </a>
                  {subItem.subsubmenu && (
                    <span className="text-orange-600 text-[22px]">
                      <IoMdArrowDropright />
                    </span>
                  )}
                  {subItem.subsubmenu && openSubMenu === subItem.name && (
                    <div className="absolute left-[220px] top-0 w-[200px] bg-white text-black shadow-lg border-t-2 border-orange-500">
                      {subItem.subsubmenu.map((subSubItem, subSubIndex) => (
                        <a key={subSubIndex} href="#" className="block px-3 py-2 hover:bg-icon_color hover:text-white transition-all duration-150">
                          {subSubItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}

    {/* More Dropdown (only on lg screens) */}
    {menuItems.length > 4 && (
      <div
        className="relative z-[100] lg:block xl:hidden" // Show only on lg screens
        onMouseEnter={() => setOpenMenu("More")}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <a href="#" className="hover:text-blue-500">More</a>
        {openMenu === "More" && (
          <div className="absolute top-4 pt-[20px] left-0 w-[220px] bg-white text-black shadow-lg border-t-2 border-orange-500">
            {menuItems.slice(10).map((item, index) => (
              <a key={index} href={item.link} className="block px-3 py-[5px] text-[14px] hover:bg-icon_color hover:text-white transition-all duration-150">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
</nav>



  </header>
  );
}
