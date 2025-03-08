import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
   <section className="font-jost">
     <Header/>

     <div className="mx-auto w-full xl:max-w-[1300px] px-[15px] py-[10px] lg:py-[20px] m-auto ">
      <div className="bg-white py-[30px] w-full">
        <div className="border-b pb-4 mb-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <FaCheckCircle className="text-green-500 text-2xl mr-2" />
            <span className="text-gray-700 font-semibold text-lg">
              Thank you. Your order has been received.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 border-b pb-4 mb-4 text-sm text-gray-700 text-center">
          <div>
            <p className="font-semibold">Order Number</p>
            <p className="text-gray-900">22496</p>
          </div>
          <div>
            <p className="font-semibold">Date</p>
            <p className="text-gray-900">March 7, 2025</p>
          </div>
          <div>
            <p className="font-semibold">Total</p>
            <p className="text-gray-900">$105.93</p>
          </div>
          <div>
            <p className="font-semibold">Payment Method</p>
            <p className="text-gray-900">Cash on delivery</p>
          </div>
        </div>

        <p className="text-gray-700 text-center mb-4">Pay with cash upon delivery.</p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Order details</h2>
          <div className="flex justify-between border-b pb-2 mb-2">
            <p>Performance Cam Gear for Nissan/Datsun, Skyline, 1989-1989 × 1</p>
            <p className="font-semibold">$99.00</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal:</p>
            <p>$99.00</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Shipping:</p>
            <p>Free shipping</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Tax:</p>
            <p>$6.93</p>
          </div>
          <div className="flex justify-between font-semibold text-gray-800 border-t pt-2 mt-2 text-lg">
            <p>TOTAL:</p>
            <p className="text-red-500">$105.93</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-gray-800 font-semibold mb-2 border-b pb-2">Billing address</h3>
            <p>Zobaer Testing</p>
            <p>RalcoRZ Performance</p>
            <p>185 6th Ave</p>
            <p>Paterson, NJ 07524</p>
            <p>+1 (973) 333-9135</p>
            <p>zobaer.ralcorz@gmail.com</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-gray-800 font-semibold mb-2 border-b pb-2">Shipping address</h3>
            <p>Zobaer Testing</p>
            <p>RalcoRZ Performance</p>
            <p>185 6th Ave</p>
            <p>Paterson, NJ 07524</p>
            <p>+1 (973) 333-9135</p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
   </section>
  );
}
