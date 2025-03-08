"use client"
import { useState } from "react";
import { FaTachometerAlt, FaShoppingBag, FaDownload, FaMapMarkerAlt, FaUser, FaHeart, FaGift, FaSignOutAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { LuCircleUser } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "../components/Footer";
import { FiTrash } from "react-icons/fi";
import Header from "../components/Header";
import { MdPayment } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const page = () => {
  const [activeTab, setActiveTab] = useState("My Account");

  const tabs = [
    { name: "My Account", icon: <RiDashboardHorizontalLine /> },
    { name: "Orders", icon: <BsCart3 /> },
    { name: "Downloads", icon: <FiDownload /> },
    { name: "Order-tracking", icon: <HiOutlineShoppingBag /> },
    { name: "Addresses", icon: <MdOutlineLocationOn /> },
    { name: "Payment Methods", icon: <MdPayment /> },
    { name: "Account Details", icon: <FiUser /> },
    { name: "Logout", icon: <TbLogout /> },
  ];
  const orders = [
    { id: "#2245", title: "How can I share ?", status: "Pending", action: "Invoice", statusColor: "text-blue-500" },
    { id: "#2220", title: "Send money, but not working", status: "Need your reply", action: "Reply", statusColor: "text-red-500" },
    { id: "#2125", title: "Balance error", status: "Resolved", action: "Invoice", statusColor: "text-green-500" },
    { id: "#2124", title: "How to decline bid", status: "On Hold", action: "Status", statusColor: "text-yellow-500" },
    { id: "#2121", title: "How to contact", status: "Resolved", action: "Invoice", statusColor: "text-green-500" },
  ];
  const wishlistItems = [
    { image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg", title: "Product 1", price: "$50.00" },
    { image: "https://ecommax.risingbamboo.com/wp-content/uploads/2024/04/1-10-600x600.jpg", title: "Product 2", price: "$30.00" },
  ];
  const paymentMethods = [
    {
      id: 1,
      name: "Datch Bangla Bank Ltd",
      bankNumber: "**********5535",
      status: "Verified",
      image: "https://shopo.quomodothemes.website/assets/images/card-3.svg",
    },
    {
      id: 2,
      name: "Datch Bangla Bank Ltd",
      bankNumber: "**********5535",
      status: "Verified",
      image: "https://shopo.quomodothemes.website/assets/images/card-4.svg",
    },
  ];
  // ---------------------new-paymnet-method-------------------
  const [newMethod, setNewMethod] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewMethod(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!name || !newMethod) return;
    alert(`New method added: ${name}`);
    setNewMethod(null);
    setImagePreview(null);
    setName("");
  };
  // -------------order-tracking-----------------
  const [orderID, setOrderID] = useState("");
  const [email, setEmail] = useState("");

  const handleTrack = () => {
    alert(`Tracking Order: ${orderID}, Email: ${email}`);
  };
  // ----------------address----------------
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Shuvo Khan",
      email: "rafiqulislamsuvobd@gmail.com",
      phone: "01792166627",
      country: "Dhaka, Bangladesh",
      state: "Barishal",
      city: "Banaripara",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  const openModal = (address = null) => {
    setCurrentAddress(address);
    setIsEdit(!!address);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentAddress(null);
    setIsModalOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEdit) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === currentAddress.id ? currentAddress : addr))
      );
    } else {
      setAddresses([...addresses, { ...currentAddress, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };
  return (
    <section className='w-full font-jost'>
      <Header/>
    <section className="px-[15px]  xl:max-w-[1300px] py-[30px] w-full">
    <div className="flex w-full xl:flex-row flex-col gap-[10px] 2xl:gap-[20px] m-auto ">
      {/* Sidebar */}
      <div className="w-full xl:w-1/4 bg-white px-[10px] xl:px-[20px] py-[30px] shadow-sm border-[1px] border-[#eee] rounded-[5px] ">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://shreethemes.in/cartzio/layouts/assets/images/client/16.jpg"
            alt="User Avatar"
            className="rounded-full w-[100px] h-[100px] mb-2"
          />
          <h2 className="text-lg font-semibold">Hello Annie</h2>
          <p className="text-sm text-gray-500">eTrade Member Since Sep 2020</p>
        </div>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center w-full mb-[5px] px-4 py-2 text-left rounded-[5px] transition-all ${
                activeTab === tab.name ? "bg-brand_color text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2 text-[22px] font-[500]">{tab.icon}</span> {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full xl:w-3/4 bg-white px-2 xl:px-6 ">
        <h1 className="tex-[17px] xl:text-[20px] text-gray-800 font-semibold mb-4">{activeTab}</h1>
        <div>
          {activeTab === "My Account" && (
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-6">
              {[{ title: "Orders", value: 5, icon: <LiaShoppingBagSolid /> },{ title: "Downloads", value: 2, icon: <FiDownload /> } , { title: "Adddress", value: 2, icon: <MdOutlineLocationOn /> },{ title: "Wishlist", value: 10, icon: <LuHeart /> }, { title: "Gift Box", value: 7, icon: <IoGiftOutline /> },{ title: "Account Details",icon: <LuCircleUser  /> }].map((item, index) => (
                <div key={index} className="p-6   border-[1px] border-[#eee] flex flex-col items-center relative">
                  <span className="text-[20px] xl:text-3xl text-black mb-2">{item.icon}</span>
                  <h3 className="text-[17px] xl:text-lg font-semibold">{item.title}</h3>
                  {item.value=="" ? "": <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{item.value}</span>}
                </div>
              ))}
            </div>
          )}
             {activeTab === "Payment Methods" && (
                <div className="max-w-3xl mx-auto p-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between border-b pb-4 mb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img src={method.image} alt={method.name} className="w-[40px] h-[40px]" />
                      <div>
                        <h2 className="text-[16px] 2xl:text-lg font-semibold">{method.name}</h2>
                        <p className="text-sm text-gray-600">Bank {method.bankNumber}</p>
                        <span className="text-green-600 text-sm font-medium">
                          {method.status}
                        </span>
                      </div>
                    </div>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                      Manage
                    </button>
                  </div>
                ))}
                <div className="flex space-x-4 mt-6">
                  <button className="bg-black text-white px-4 py-2 rounded">Add Method</button>
                </div>
              </div>
          )}
    
          {activeTab === "Orders" && (
            <table className="w-full border-collapse ">
            <thead>
              <tr className="">
                <th className=" p-2">Order Id</th>
                <th className="  p-2">Product Title</th>
                <th className=" p-2">Status</th>
                <th className=" p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="text-center border-b-[1px] border-gray-200 ">
                  <td className=" p-2 text-blue-500 cursor-pointer">{order.id}</td>
                  <td className="p-2">{order.title}</td>
                  <td className={`p-2 ${order.statusColor}`}>{order.status}</td>
                  <td className=" p-2">
                    <button className=" px-4 py-1 rounded border-[1px] bg-black text-white border-gray-200">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
             {activeTab === "Order-tracking" && (
       <div className="flex justify-center items-center">
       <div className="bg-white py-6 w-full">
        <div className="w-full">
         <p className="text-gray-600 mb-4">
           To track your order, please enter your Order ID in the box below and press "Track".
           This was given to you on your receipt and in the confirmation email.
         </p>
        </div>
 
        <div className="w-full xl:w-[60%]">
        <div className="mb-4 ">
           <label className="block text-gray-700 font-medium mb-1">Order ID</label>
           <input
             type="text"
             value={orderID}
             onChange={(e) => setOrderID(e.target.value)}
             placeholder="Found in your order confirmation email"
             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         <div className="mb-4">
           <label className="block text-gray-700 font-medium mb-1">Billing email</label>
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email you used during checkout"
             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
 
         <button
           onClick={handleTrack}
           className="w-full bg-brand_color text-white py-2 rounded-[4px] hover:bg-gray-900 transition"
         >
           Track
         </button>
        </div>
       </div>
     </div>
          )}
           {activeTab === "Downloads" && (
            <table className="w-full border-collapse ">
            <thead>
              <tr className="">
                <th className=" p-2">Order Id</th>
                <th className="  p-2">Product Title</th>
                <th className=" p-2">Status</th>
                <th className=" p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="text-center border-b-[1px] border-gray-200 ">
                  <td className=" p-2 text-blue-500 cursor-pointer">{order.id}</td>
                  <td className="p-2">{order.title}</td>
                  <td className={`p-2 ${order.statusColor}`}>{order.status}</td>
                  <td className=" p-2">
                    <button className=" px-4 py-1 rounded border-[1px] bg-black text-white border-gray-200">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
          {activeTab === "Addresses" && (
         <div className="flex flex-col w-full space-y-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {addresses.map((address) => (
             <div key={address.id} className="bg-white p-4 rounded-[4px] border-[1px] border-[#eee]  w-80 relative">
               <h2 className="text-lg font-semibold mb-2">Address #{address.id}</h2>
               <p><strong>Name:</strong> {address.name}</p>
               <p><strong>Email:</strong> {address.email}</p>
               <p><strong>Phone:</strong> {address.phone}</p>
               <p><strong>Country:</strong> {address.country}</p>
               <p><strong>State:</strong> {address.state}</p>
               <p><strong>City:</strong> {address.city}</p>
   
               <div className="absolute top-4 right-4 flex space-x-2">
                 <button onClick={() => openModal(address)} className="text-blue-500 hover:text-blue-700">
                   <FiEdit size={20} />
                 </button>
                 <button onClick={() => handleDelete(address.id)} className="text-red-500 hover:text-red-700">
                   <FiTrash size={20} />
                 </button>
               </div>
             </div>
           ))}
         </div>
   
         <button
           onClick={() => openModal()}
           className="bg-brand_color w-[200px] text-white px-6 py-2 rounded-[4px] hover:bg-yellow-600"
         >
           Add New Address
         </button>
   
         {isModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
               <h2 className="text-lg font-semibold mb-4">{isEdit ? "Edit Address" : "Add New Address"}</h2>
               <form onSubmit={handleSave} className="space-y-2">
                 <input
                   type="text"
                   placeholder="Name"
                   value={currentAddress?.name || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, name: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <input
                   type="email"
                   placeholder="Email"
                   value={currentAddress?.email || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, email: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <input
                   type="text"
                   placeholder="Phone"
                   value={currentAddress?.phone || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, phone: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <input
                   type="text"
                   placeholder="Country"
                   value={currentAddress?.country || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, country: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <input
                   type="text"
                   placeholder="State"
                   value={currentAddress?.state || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, state: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <input
                   type="text"
                   placeholder="City"
                   value={currentAddress?.city || ""}
                   onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
                   className="w-full p-2 border rounded"
                 />
                 <div className="flex justify-end space-x-2 mt-4">
                   <button
                     type="button"
                     onClick={closeModal}
                     className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                   >
                     Cancel
                   </button>
                   <button
                     type="submit"
                     className="px-4 py-2 bg-brand_color text-white rounded-[4px]"
                   >
                     Save
                   </button>
                 </div>
               </form>
             </div>
           </div>
         )}
       </div>
          )}
          {activeTab === "Account Details" && (
            <form>
              <label className="block mb-2">First Name</label>
              <input className="w-full p-2 border rounded mb-4" type="text" defaultValue="Annie" />
              <label className="block mb-2">Last Name</label>
              <input className="w-full p-2 border rounded mb-4" type="text" defaultValue="Mario" />
              <label className="block mb-2">Country/Region</label>
              <select className="w-full p-2 border rounded mb-4">
                <option>United Kingdom (UK)</option>
              </select>
              <h2 className="text-lg font-semibold mt-4">Password Change</h2>
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Current Password" />
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="New Password" />
              <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Confirm New Password" />
              <button className="bg-brand_color text-white px-4 py-2 rounded-[4px]">Save Changes</button>
            </form>
          )}
          {activeTab === "Logout" && <p>You have been logged out.</p>}
        </div>
      </div>
    </div>
    </section>
    <Footer/>
    </section>
  );
};

export default page;