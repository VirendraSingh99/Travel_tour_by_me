
// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";

// export default function TwoColumnLayout() {
//   const destinations = [
//     "Any",
//     "America",
//     "Asia",
//     "Egypt",
//     "Scandinavia",
//     "South Africa",
//     "Western Europe",
//   ];

//   const durations = [
//     "Any",
//     "1 Day Tour",
//     "2–4 Days Tour",
//     "5–7 Days Tour",
//     "7+ Days Tour",
//   ];

//   const [selectedDestination, setSelectedDestination] = useState("Any");
//   const [selectedDuration, setSelectedDuration] = useState("Any");
//   const [keyword, setKeyword] = useState("");

//   return (
//     <div className="bg-slate-200 min-h-screen p-4 sm:p-6">
//       {/* Hero Section */}
//       <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-10">
//         {/* Left Side */}
//         <div className="w-full md:w-1/2 flex flex-col gap-4">
//           <button className="bg-white text-teal-400 px-6 py-2 rounded-2xl w-fit shadow-lg text-sm sm:text-base">
//             Book With Us!
//           </button>
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
//             Find Next Place <br />
//             To <span className="text-blue-400">Visit</span>
//           </h1>
//           <p className="text-gray-500 text-base sm:text-lg md:text-xl pt-2">
//             Discover amazing places at exclusive deals.
//             <br />
//             Eat, shop, and visit interesting places around the world.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src="/bg.jpg"
//             alt="Travel Hero"
//             className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Search Form */}
//       <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md px-4 py-8 sm:px-8 sm:py-10 mt-10">
//         <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
//           {/* Keyword */}
//           <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
//             <label className="text-black font-semibold text-sm mb-1">
//               Keywords
//             </label>
//             <input
//               type="text"
//               placeholder="Type Your Keywords"
//               value={keyword}
//               onChange={(e) => setKeyword(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Destination */}
//           <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
//             <label className="text-black font-semibold text-sm mb-1">
//               Destination
//             </label>
//             <select
//               value={selectedDestination}
//               onChange={(e) => setSelectedDestination(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {destinations.map((dest, i) => (
//                 <option key={i} value={dest}>
//                   {dest}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Duration */}
//           <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
//             <label className="text-black font-semibold text-sm mb-1">
//               Duration
//             </label>
//             <select
//               value={selectedDuration}
//               onChange={(e) => setSelectedDuration(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {durations.map((duration, i) => (
//                 <option key={i} value={duration}>
//                   {duration}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Button */}
//           <div className="w-full sm:w-[48%] md:w-[22%] flex items-end">
//             <a

//               href="/Search"
//               className="w-full flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-4 rounded-lg transition"
//             >
//               <CiSearch className="text-2xl" />
//               Search Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function TwoColumnLayout() {
  const destinations = [
    "Any",
    "America",
    "Asia",
    "Egypt",
    "Scandinavia",
    "South Africa",
    "Western Europe",
  ];

  const durations = [
    "Any",
    "1 Day Tour",
    "2–4 Days Tour",
    "5–7 Days Tour",
    "7+ Days Tour",
  ];

  const [selectedDestination, setSelectedDestination] = useState("Any");
  const [selectedDuration, setSelectedDuration] = useState("Any");
  const [keyword, setKeyword] = useState("");

  return (
    <div className="bg-slate-200 min-h-screen p-4 sm:p-6">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <button className="bg-white text-teal-400 px-6 py-2 rounded-2xl w-fit shadow-lg text-sm sm:text-base">
            Book With Us!
          </button>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
            Find Next Place <br />
            To <span className="text-blue-400">Visit</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl pt-2">
            Discover amazing places at exclusive deals.
            <br />
            Eat, shop, and visit interesting places around the world.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/bg.jpg"
            alt="Travel Hero"
            className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Search Form */}
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md px-4 py-8 sm:px-8 sm:py-10 mt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
          {/* Keyword */}
          <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
            <label className="text-black font-semibold text-sm mb-1">
              Keywords
            </label>
            <input
              type="text"
              placeholder="Type Your Keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Destination */}
          <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
            <label className="text-black font-semibold text-sm mb-1">
              Destination
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {destinations.map((dest, i) => (
                <option key={i} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="flex flex-col w-full sm:w-[48%] md:w-[22%]">
            <label className="text-black font-semibold text-sm mb-1">
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {durations.map((duration, i) => (
                <option key={i} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <div className="w-full sm:w-[48%] md:w-[22%] flex items-end">
            <Link
              to="/Search"
              className="w-full flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-4 rounded-lg transition"
            >
              <CiSearch className="text-2xl" />
              Search Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
