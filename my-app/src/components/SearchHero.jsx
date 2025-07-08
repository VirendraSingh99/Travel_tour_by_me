import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const SearchHero = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    { img: "/img1.jpg", title: "Beach Paradise", price: "$299", rating: 5 },
    { img: "/img2.jpg", title: "Mountain Adventure", price: "$399", rating: 4 },
    { img: "/img3.jpg", title: "City Lights", price: "$199", rating: 3 },
    { img: "/img4.jpg", title: "Nature Escape", price: "$349", rating: 5 },
    { img: "/img5.jpg", title: "Cultural Journey", price: "$259", rating: 4 },
    { img: "/img6.jpeg", title: "Wildlife Safari", price: "$499", rating: 5 },
    { img: "/img7.webp", title: "Island Getaway", price: "$549", rating: 5 },
    { img: "/img8.webp", title: "Desert Ride", price: "$329", rating: 4 },
    { img: "/img9.webp", title: "Tropical Escape", price: "$299", rating: 5 },
    { img: "/img10.webp", title: "Jungle Trek", price: "$459", rating: 3 },
    { img: "/img11.webp", title: "Northern Lights", price: "$799", rating: 5 },
    { img: "/img12.webp", title: "Countryside Relax", price: "$279", rating: 4 },
    { img: "/img13.webp", title: "Historic Places", price: "$349", rating: 3 },
    { img: "/img14.jpg", title: "Coastal Chill", price: "$389", rating: 4 },
    { img: "/img15.jpg", title: "Volcano Adventure", price: "$599", rating: 5 },
    { img: "/img16.jpg", title: "Luxury Cruise", price: "$899", rating: 5 },
    { img: "/img17.jpg", title: "Snowy Peaks", price: "$499", rating: 4 },
    { img: "/TravelTour3.jpg", title: "Lakeside Cabin", price: "$319", rating: 5 },
    { img: "/TravelTour4.jpg", title: "Safari Expedition", price: "$579", rating: 4 },
  ];

  const getMonthOptions = () => {
    const options = ["Any"];
    const start = new Date(2025, 6);
    for (let i = 0; i < 12; i++) {
      const date = new Date(start.getFullYear(), start.getMonth() + i);
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      options.push(`${month} ${year}`);
    }
    return options;
  };

  // Pagination logic
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <div className="bg-gray-100 py-32 font-bold text-black text-3xl md:text-5xl text-center">
        <h1>Search Tours</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 my-16 px-4 md:px-12">
        {/* FILTER PANEL */}
        <form className="w-full md:max-w-sm p-6 bg-white rounded-md shadow-md space-y-6">
          <div className="flex items-center gap-2">
            <FaSearch className="text-black text-2xl" />
            <h2 className="text-blue-600 font-bold text-2xl">Tour Search</h2>
          </div>

          {/* Keywords */}
          <div>
            <label className="block font-semibold text-lg mb-1">Keywords</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-grow text-lg"
              />
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block font-semibold text-lg mb-1">Duration</label>
            <div className="relative">
              <select className="w-full border rounded-md px-3 py-2 text-lg bg-gray-100">
                <option>Any</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>1 Week +</option>
              </select>
              <IoIosArrowDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold text-lg mb-1">Date</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input type="date" className="bg-transparent outline-none text-lg w-full" />
            </div>
          </div>

          {/* Month */}
          <div>
            <label className="block font-semibold text-lg mb-1">Month</label>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-gray-100 text-lg"
              >
                {getMonthOptions().map((month, i) => (
                  <option key={i} value={month}>{month}</option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Price Range */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg mb-1">Min Price</label>
              <input type="number" placeholder="$" className="w-full border rounded-md px-3 py-2 bg-gray-100 text-lg" />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-lg mb-1">Max Price</label>
              <input type="number" placeholder="$" className="w-full border rounded-md px-3 py-2 bg-gray-100 text-lg" />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold text-lg mb-1">Rating</label>
            <div className="flex gap-1 text-orange-400 text-2xl py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    onChange={() => setRating(star)}
                    checked={rating === star}
                    className="hidden"
                  />
                  <FaStar className={star <= rating ? "text-orange-400" : "text-gray-300"} />
                </label>
              ))}
            </div>
            {rating > 0 && (
              <button
                type="button"
                onClick={() => setRating(0)}
                className="text-blue-500 underline text-lg mt-2"
              >
                Clear Rating
              </button>
            )}
          </div>

          {/* Tour Age */}
          <div>
            <label className="block font-semibold text-lg mb-2">Tour Age</label>
            <div className="flex flex-col gap-2 text-lg text-gray-700">
              <label><input type="checkbox" className="mr-2" /> 10+</label>
              <label><input type="checkbox" className="mr-2" /> 12+</label>
              <label><input type="checkbox" className="mr-2" /> 15+</label>
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="block font-semibold text-lg mb-2">Type</label>
            <div className="flex flex-col gap-2 text-lg text-gray-700">
              <label><input type="checkbox" className="mr-2" /> City Tour</label>
              <label><input type="checkbox" className="mr-2" /> Cultural & Thematic Tours</label>
              <label><input type="checkbox" className="mr-2" /> Family Friendly Tours</label>
              <label><input type="checkbox" className="mr-2" /> Holiday & Seasonal Tours</label>
              <label><input type="checkbox" className="mr-2" /> Wildlife & Nature Tours</label>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <label className="block font-semibold text-lg mb-2">Destinations</label>
            <div className="flex flex-col gap-2 text-lg text-gray-700">
              <label><input type="checkbox" className="mr-2" /> America</label>
              <label><input type="checkbox" className="mr-2" /> Europe</label>
              <label><input type="checkbox" className="mr-2" /> Asia</label>
              <label><input type="checkbox" className="mr-2" /> Australia</label>
              <label><input type="checkbox" className="mr-2" /> Western Africa</label>
              <label><input type="checkbox" className="mr-2" /> South Africa</label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition-all">
            Submit
          </button>
        </form>

        {/* CARD SECTION */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold py-9 text-black mb-6">{cards.length} Results Found</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentCards.map((card, i) => (
              <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden flex flex-col">
                <img src={card.img} alt={card.title} className="w-full h-80 object-cover" />
                <div className="p-8 text-right">
                  <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                  <div className="flex justify-end items-center gap-1 text-yellow-500 mt-1">
                    {[...Array(card.rating)].map((_, star) => (
                      <FaStar key={star} />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">({card.rating} Stars)</span>
                  </div>
                  <p className="text-lg text-gray-600 mt-2">
                    From <span className="text-blue-600 font-semibold text-xl">{card.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded border font-bold ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
