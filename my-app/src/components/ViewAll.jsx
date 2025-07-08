
import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ViewAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const allCards = [
    { img: "/View1.jpg", title: "Africa – Amazing African Safari", price: "$100" },
    { img: "/View2.jpg", title: "Dubai – All Stunning Places", price: "$1,200" },
    { img: "/View3.jpg", title: "Bali – Tropical Paradise", price: "$800" },
    { img: "/View4.jpg", title: "Swiss Alps – Snow Adventures", price: "$1,000" },
    { img: "/View5.jpg", title: "Japan – Cherry Blossom Season", price: "$1,400" },
    { img: "/View6.jpg", title: "Thailand – Island Getaway", price: "$900" },
    { img: "/View7.jpg", title: "Canada – Mountain Trails", price: "$750" },
    { img: "/View8.jpg", title: "France – Wine & Castles", price: "$1,300" },
    { img: "/View9.jpg", title: "Italy – Art & Architecture", price: "$1,150" },
    { img: "/View10.jpg", title: "Maldives – Luxury Beaches", price: "$2,000" },
  ];

  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-100 py-28 text-black text-2xl md:text-4xl text-center font-bold">
        <h1>Search Tours</h1>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10 px-4 md:px-12">
        {/* Sidebar */}
        <form className="w-full md:max-w-sm p-6 bg-white rounded-md shadow-md space-y-6 sticky top-6 h-fit">
          <div className="flex items-center gap-2">
            <FaSearch className="text-black text-sm" />
            <h2 className="text-blue-600 font-bold text-base">Tour Search</h2>
          </div>

          {/* Filters */}
          <div>
            <label className="block font-semibold text-sm mb-1">Keywords</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
              <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-grow text-sm" />
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">Duration</label>
            <div className="relative">
              <select className="appearance-none w-full border rounded-md px-3 py-2 bg-gray-100 text-sm">
                <option>Any</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>1 Week +</option>
              </select>
              <IoIosArrowDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">Date</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input type="date" className="bg-transparent outline-none text-sm w-full" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-sm mb-1">Min Price</label>
              <input type="number" placeholder="$" className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm outline-none" />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-sm mb-1">Max Price</label>
              <input type="number" placeholder="$" className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm outline-none" />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">Rating</label>
            <div className="flex gap-1 text-orange-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="text-gray-500 text-xs mt-1">5 Star Reviews</p>
          </div>

          <hr className="my-4" />
          <h3 className="font-bold text-blue-600 text-sm mb-4">Tour Filter</h3>

          {/* More Filters */}
          {[
            {
              label: "Age",
              options: ["0-18", "18+", "40+"],
            },
            {
              label: "Type",
              options: ["City Tour", "Cultural & Thematic", "Family Friendly", "Holiday & Seasonal", "Wildlife & Nature"],
            },
            {
              label: "Location",
              options: ["Europe", "Asia", "Australia", "North America", "South Africa"],
            },
          ].map((section, i) => (
            <div className="mb-6" key={i}>
              <label className="block font-semibold text-sm mb-2">{section.label}</label>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                {section.options.map((opt, j) => (
                  <label key={j}><input type="checkbox" className="mr-2" /> {opt}</label>
                ))}
              </div>
            </div>
          ))}

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all duration-300">
            Submit
          </button>
        </form>

        {/* Results */}
        <div className="flex-1">
          <div className="text-xl font-bold text-black mb-4 mt-2">
            {allCards.length} Results Found
          </div>

          {/* Sort Options */}
          <div className="bg-white p-4 rounded-md shadow mb-6 flex flex-wrap items-center gap-4">
            <span className="font-semibold">Sort by</span>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Release Date</option>
            </select>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Descending</option>
            </select>
            <div className="ml-auto flex gap-2">
              <button className="p-2 border rounded text-sm">📃</button>
              <button className="p-2 border rounded text-sm">🔲</button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            {paginatedCards.map((card, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <img src={card.img} alt={card.title} className="w-full h-60 object-cover" />
                  {startIndex + i === 0 && (
                    <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
                      Best Seller
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, star) => <span key={star}>★</span>)}
                    <span className="text-gray-500 text-sm ml-2">(1 Review)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    From <span className="text-blue-600 font-semibold">{card.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 mb-10 space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-1 rounded border text-sm cursor-pointer ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
