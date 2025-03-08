"use client"
import { useState, useEffect } from "react";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  const [selectedShipping, setSelectedShipping] = useState("inside");
  const [paymentMethod, setPaymentMethod] = useState("sslcommerz");
  const [billingAddress, setBillingAddress] = useState("same");
  const [products, setProducts] = useState([]);

  // Calculate the total price
  const calculateTotalPrice = () => {
    const subtotal = products.reduce((total, product) => total + product.price, 0);
    const shippingPrice = selectedShipping === "inside" ? 65 : 110;
    return subtotal + shippingPrice;
  };

  return (
   <section>
    <Header/>

    <div className="max-w-7xl mx-auto font-jost p-4 grid pt-[50px] grid-cols-1 font-baji md:grid-cols-2 gap-8">
      {/* Left Section - Delivery Details */}
      <div>
        <Link href="/category" className="text-[17px] font-[600] text-blue-500">Back To Shopping</Link>
        <h2 className="text-2xl font-bold mb-4 mt-[20px]">Contact</h2>
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className="w-full border p-3 rounded-md mb-6"
        />

        <h2 className="text-2xl font-bold mb-4">Delivery</h2>
        <p className="mb-2 font-medium">Country/Region</p>
        <input
          type="text"
          value="Bangladesh"
          readOnly
          className="w-full border p-3 rounded-md mb-4 bg-gray-100"
        />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name (optional)" className="border p-3 rounded-md" />
          <input type="text" placeholder="Last name" className="border p-3 rounded-md" />
        </div>
        <input type="text" placeholder="Address" className="w-full border p-3 rounded-md my-4" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="City" className="border p-3 rounded-md" />
          <input type="text" placeholder="Postal code (optional)" className="border p-3 rounded-md" />
        </div>
        <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded-md my-4" />

        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">Save this information for next time</label>
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <input type="checkbox" id="news-offers" />
          <label htmlFor="news-offers">Text me with news and offers</label>
        </div>

        <h2 className="text-2xl font-bold mb-4">Shipping method</h2>
        <div
          className={`border p-4 rounded-md flex justify-between items-center cursor-pointer ${selectedShipping === "inside" ? "border-blue-500 bg-blue-100" : ""}`}
          onClick={() => setSelectedShipping("inside")}
        >
          <span>ঢাকা সিটির মধ্যে</span>
          <span className="flex items-center gap-2">৳65.00 {selectedShipping === "inside" ? <FaCheckCircle className="text-blue-500" /> : <FaRegCircle />}</span>
        </div>
        <div
          className={`border p-4 rounded-md flex justify-between items-center cursor-pointer mt-2 ${selectedShipping === "outside" ? "border-blue-500 bg-blue-100" : ""}`}
          onClick={() => setSelectedShipping("outside")}
        >
          <span>ঢাকা সিটির বাইরে</span>
          <span className="flex items-center gap-2">৳110.00 {selectedShipping === "outside" ? <FaCheckCircle className="text-blue-500" /> : <FaRegCircle />}</span>
        </div>

        <div className="w-full mt-[20px] p-4 border  bg-white">
          <h2 className="text-lg font-semibold">Payment</h2>
          <p className="text-sm text-gray-500 mb-3">All transactions are secure and encrypted.</p>

          {/* Payment Method */}
          <div className="border rounded-lg overflow-hidden">
            <label
              className={`flex items-center p-3 border-b cursor-pointer ${paymentMethod === "sslcommerz" ? "bg-blue-100" : ""}`}
            >
              <input
                type="radio"
                name="payment"
                value="sslcommerz"
                checked={paymentMethod === "sslcommerz"}
                onChange={() => setPaymentMethod("sslcommerz")}
                className="hidden"
              />
              <div className="flex items-center w-full">
                <span className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                  {paymentMethod === "sslcommerz" && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
                </span>
                <span className="font-medium">SSLCOMMERZ</span>
                <div className="ml-auto flex space-x-1">
                  <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" alt="Visa" className="h-5" />
                  <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg" alt="Mastercard" className="h-5" />
                  <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/diners_club.B9hVEmwz.svg" alt="Diners Club" className="h-5" />
                </div>
              </div>
            </label>
            <div className="p-4 text-sm text-gray-600 border-b">
              After clicking “Pay now”, you will be redirected to SSLCOMMERZ to complete your purchase securely.
            </div>
            <label
              className={`flex items-center p-3 cursor-pointer ${paymentMethod === "cod" ? "bg-blue-100" : ""}`}
            >
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="hidden"
              />
              <span className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                {paymentMethod === "cod" && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
              </span>
              <span className="font-medium">Cash On Delivery (প্রোডাক্ট হাতে পেয়ে মূল্য পরিশোধ করুন)</span>
            </label>
          </div>

          {/* Billing Address */}
          <h3 className="text-md font-semibold mt-4">Billing address</h3>
          <div className="border rounded-lg overflow-hidden">
            <label
              className={`flex items-center p-3 border-b cursor-pointer ${billingAddress === "same" ? "bg-blue-100" : ""}`}
            >
              <input
                type="radio"
                name="billing"
                value="same"
                checked={billingAddress === "same"}
                onChange={() => setBillingAddress("same")}
                className="hidden"
              />
              <span className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                {billingAddress === "same" && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
              </span>
              <span className="font-medium">Same as shipping address</span>
            </label>
            <label
              className={`flex items-center p-3 cursor-pointer ${billingAddress === "different" ? "bg-blue-100" : ""}`}
            >
              <input
                type="radio"
                name="billing"
                value="different"
                checked={billingAddress === "different"}
                onChange={() => setBillingAddress("different")}
                className="hidden"
              />
              <span className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center mr-2">
                {billingAddress === "different" && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
              </span>
              <span className="font-medium">Use a different billing address</span>
            </label>
          </div>

          {/* Pay Now Button */}
          <button className="w-full bg-brand_color2 text-white py-3 mt-4 rounded-lg font-semibold hover:bg-brand_color2">
            Pay now
          </button>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="border rounded-md p-6">
        <div>
        <div className="flex items-center gap-4 mb-4">
              <img  src="https://www.roopban.com/wp-content/uploads/2024/12/Untitled-5-1-450x450.jpg" className="w-16 h-16 rounded-md border-[1px] border-gray-200 p-[10px]" />
              <div>
                <p>TIA’M – Pore Minimizing </p>
                <p className="font-bold">৳6666</p>
              </div>
            </div>
        </div>
        <div className="flex justify-between mb-4">
          <span>Subtotal - 1 items</span>
          <span className="font-bold">৳1,199.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span className="font-bold">৳1,199.00</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>BDT ৳1,199.00</span>
          {/* -------comment----- */}
        </div>
        <button className="w-full bg-brand_color2 text-white p-3 rounded-md mt-4">Place Order</button>
      </div>
    </div>
    <Footer/>
   </section>
  );
};

export default Checkout;
