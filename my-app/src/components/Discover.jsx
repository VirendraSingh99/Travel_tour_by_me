import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Discover = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden w-full h-80 text-white">
          <img
            src="/Sunrise.jpg"
            alt="Special Deal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Discover Special Deals!
              </h2>
              <p className="text-sm">
                Make sure to check out these special promotions
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-fit text-sm font-semibold">
              See Tours
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 rounded-xl p-8 w-full h-80 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Don’t miss a thing
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get updates on special deals and exclusive offers.
              <br />
              Sign up to our newsletter!
            </p>
          </div>

          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md mt-4">
            <div className="flex items-center px-4 text-gray-400 text-sm w-full">
              <FaPaperPlane className="mr-2" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="py-3 w-full outline-none bg-transparent text-gray-800 placeholder:text-gray-500 text-sm"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
