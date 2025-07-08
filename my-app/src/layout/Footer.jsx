
// import React, { useState } from "react";

// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaPinterestP,
//   FaTiktok,
// } from "react-icons/fa6";

// export default function Footer() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState("EUR");

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const selectCurrency = (currency) => {
//     setSelectedCurrency(currency);
//     setIsOpen(false);
//   };

//   return (
//     <footer className="bg-black text-white">
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row flex-wrap justify-between px-6 lg:px-16 py-10 gap-10">
//         {/* Travel Tour */}
//         <div className="flex-1 min-w-[200px]">
//           <p className="text-2xl font-bold mb-4">
//             Travel <span className="text-blue-400">Tour</span>
//           </p>
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="bg-gray-800 text-white px-6 py-2 rounded-sm"
//             >
//               {selectedCurrency} <span className="ml-1">▼</span>
//             </button>
//             {isOpen && (
//               <div className="absolute mt-2 w-24 bg-black border border-gray-700 rounded shadow z-10">
//                 <ul>
//                   <li
//                     className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
//                     onClick={() => selectCurrency("USD")}
//                   >
//                     USD
//                   </li>
//                   <li
//                     className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
//                     onClick={() => selectCurrency("INR")}
//                   >
//                     INR
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="flex-1 min-w-[200px]">
//           <p className="text-xl font-bold mb-4">Contact</p>
//           <p className="mb-2">T: 1-634–567–34</p>
//           <p className="mb-4">E: contact@traveltourtheme.co</p>
//           <div className="flex gap-4 text-xl">
//             <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
//             <FaXTwitter className="hover:text-blue-500 cursor-pointer" />
//             <FaPinterestP className="hover:text-red-500 cursor-pointer" />
//             <FaTiktok className="hover:text-gray-300 cursor-pointer" />
//           </div>
//         </div>

//         {/* Useful Links */}
//         <div className="flex-1 min-w-[200px]">
//           <p className="text-xl font-bold mb-4">Useful Links</p>
//           <p className="mb-2 cursor-pointer hover:underline">Travel Blog & Tips</p>
//           <p className="mb-2 cursor-pointer hover:underline">Working With Us</p>
//           <p className="cursor-pointer hover:underline">Be Our Partner</p>
//         </div>

//         {/* Payment Info */}
//         <div className="flex-1 min-w-[200px] max-w-sm">
//           <p className="text-xl font-bold mb-4">Pay Safely With Us</p>
//           <p className="mb-4 leading-relaxed">
//             The payment is encrypted and <br />
//             transmitted securely with an SSL <br />
//             protocol.
//           </p>
//           <div className="flex gap-3 items-center flex-wrap">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
//               alt="PayPal"
//               className="h-[20px] object-contain"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
//               alt="Visa"
//               className="h-[20px] object-contain"
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
//               alt="MasterCard"
//               className="h-[20px] object-contain"
//             />
//             <img
//               src="/OIP.webp"
//               alt="Amex"
//               className="h-[20px] object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="border-t border-gray-700 text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="flex flex-wrap gap-6 justify-center">
//           <a href="/" className="hover:underline">Home</a>
//           <a href="/about" className="hover:underline">About</a>
//           <a href="/Blog" className="hover:underline">Blog</a>
//           <a href="/Contact" className="hover:underline">Contact</a>
//         </div>
//         <div className="text-center md:text-right">
//           © 2025 GoodLayers. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-between px-6 lg:px-16 py-10 gap-10">
        {/* Travel Tour */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-2xl font-bold mb-4">
            Travel <span className="text-blue-400">Tour</span>
          </p>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-gray-800 text-white px-6 py-2 rounded-sm"
            >
              {selectedCurrency} <span className="ml-1">▼</span>
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-24 bg-black border border-gray-700 rounded shadow z-10">
                <ul>
                  <li
                    className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => selectCurrency("USD")}
                  >
                    USD
                  </li>
                  <li
                    className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => selectCurrency("INR")}
                  >
                    INR
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-xl font-bold mb-4">Contact</p>
          <p className="mb-2">T: 1-634–567–34</p>
          <p className="mb-4">E: contact@traveltourtheme.co</p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaXTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
            <FaTiktok className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-xl font-bold mb-4">Useful Links</p>
          <Link to="/travel-blog" className="mb-2 cursor-pointer hover:underline">Travel Blog & Tips</Link>
          <Link to="/working-with-us" className="mb-2 cursor-pointer hover:underline">Working With Us</Link>
          <Link to="/be-our-partner" className="cursor-pointer hover:underline">Be Our Partner</Link>
        </div>

        {/* Payment Info */}
        <div className="flex-1 min-w-[200px] max-w-sm">
          <p className="text-xl font-bold mb-4">Pay Safely With Us</p>
          <p className="mb-4 leading-relaxed">
            The payment is encrypted and <br />
            transmitted securely with an SSL <br />
            protocol.
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-[20px] object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-[20px] object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              className="h-[20px] object-contain"
            />
            <img
              src="/OIP.webp"
              alt="Amex"
              className="h-[20px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="text-center md:text-right">
          © 2025 GoodLayers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
