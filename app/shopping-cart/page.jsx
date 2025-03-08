"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart } = useCart();
  const shipping = 50;
  const total = totalPrice + shipping;

  return (
    <section className="w-full font-jost">
      <Header />
      <section>
        <div className="w-full">
          <div className="bg-[#FAFAFA] lg:hidden px-[20px] mt-[10px] border-[1px] bordr-gray-200 py-[10px] text-[20px] font-[600] text-center">
            <h2>Shopping Cart</h2>
          </div>
          {/* Progress Bar */}
          <div className="w-full lg:flex hidden  bg-[#FAFAFA]">
            <div className="mx-auto flex w-full xl:w-[1300px] py-[20px]  flex-col sm:flex-row justify-between items-center pb-4 mb-4 text-base sm:text-lg font-semibold">
              <div className="text-brand_color text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold">01</span> SHOPPING CART
                <p className="text-gray-500 text-xs sm:text-sm">Manage Your Items List</p>
              </div>
              <div className="text-gray-300 text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold">02</span> CHECKOUT DETAILS
                <p className="text-xs sm:text-sm">Checkout Your Items List</p>
              </div>
              <div className="text-gray-300 text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold">03</span> ORDER COMPLETE
                <p className="text-xs sm:text-sm">Review Your Order</p>
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <section className="mx-auto w-full px-[20px] xl:w-[1300px] py-[20px] lg:flex-row flex-col flex gap-[50px] lg:gap-[30px]">
            <section className="w-full lg:w-[65%]">
              {cart.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border text-left text-sm sm:text-base">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 sm:p-3 font-[500]">PRODUCT</th>
                        <th className="p-2 sm:p-3 font-[500]">PRICE</th>
                        <th className="p-2 sm:p-3 font-[500]">QUANTITY</th>
                        <th className="p-2 sm:p-3 font-[500] lg:block hidden">TOTAL</th>
                        <th className="p-2 sm:p-3 font-[500]">REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <img src={item.images.main} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover  rounded" />
                            <span className="text-[15px] sm:text-base">{item.name}</span>
                          </td>
                          <td className="p-2 sm:p-3">৳ {item.price.toLocaleString()}</td>
                          <td className="p-2 sm:p-3">
                            <div className="grid grid-cols-2 border rounded w-16">
                              <div className="flex items-center justify-center text-lg">{item.quantity}</div>
                              <div className="grid grid-rows-2 border-l">
                                <button className="h-6 flex items-center justify-center border-b" onClick={() => updateQuantity(item.id, "increase")}>
                                  +
                                </button>
                                <button className="h-6 flex items-center justify-center" onClick={() => updateQuantity(item.id, "decrease")}>
                                  -
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 sm:p-3 text-red-600 font-[500] lg:block hidden text-[17px]">৳ {(item.price * item.quantity).toLocaleString()}</td>
                          <td className="p-2 sm:p-3">
                            <button className="text-red-600 font-bold" onClick={() => removeFromCart(item.id)}>X</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="flex flex-wrap lg:flex-row flex-col gap-2 mt-4">
                {/* Coupon Input and Apply Button */}
                <div className="flex gap-2 flex-1">
                  <input type="text" placeholder="Enter Coupon Code" className="border p-2 sm:p-3 flex-1 rounded text-xs sm:text-sm" />
                  <button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-[500] text-xs sm:text-[13px]">
                    APPLY COUPON
                  </button>
                </div>

                {/* Update Cart Button */}
                <button className="bg-gray-100 border-[1px] border-gray-200 text-gray-500 px-4 sm:px-6 py-2 sm:py-3 rounded font-[500] text-xs sm:text-sm cursor-not-allowed">
                  UPDATE CART
                </button>
              </div>
            </section>
  {/* Cart Totals */}

            {/* Cart Totals */}
            <div className="w-full lg:w-[35%] border-[2px] p-4 sm:p-6 rounded shadow-sm  bg-gray-50 text-sm sm:text-base">
              <h3 className="font-[500] mb-[30px] sm:mb-[40px] text-lg sm:text-xl">CART TOTALS</h3>
              <p className="flex justify-between text-[16px] lg:text-[17px] font-[500] border-b pb-2 sm:pb-3">
                <span>Subtotal</span> <span>৳ {totalPrice.toLocaleString()}</span>
              </p>
              <p className="flex justify-between text-[16px] lg:text-[17px] font-[500] border-b py-3">
                <span>Shipping</span> <span>Inside Dhaka: ৳ {shipping}</span>
              </p>
              <p className="text-gray-700 text-[16px] lg:text-[17px] font-[500] mt-3 text-right">Shipping to Dhaka</p>
              <p className="text-gray-600 text-[16px] lg:text-[17px] font-[500] mt-3  text-right">shihabmoni99@gmail.com, shihabmoni99@gmail.com, Dhaka.</p>
              <p className="text-gray-600 text-[14px] lg:text-[15px] font-[500]cursor-pointer mt-3  text-right">Change address</p>
              <p className="flex justify-between font-[500]  text-lg sm:text-[20px] mt-4">
                <span >Total</span> <span className="text-red-600 font-[600]">৳ {total.toLocaleString()}</span>
              </p>
              <button className="bg-red-600 text-white w-full mt-4 sm:mt-6 py-2 sm:py-3  text-sm sm:text-[15px] font-[500]">PROCEED TO CHECKOUT</button>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Page;
