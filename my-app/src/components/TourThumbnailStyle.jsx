
import React, { useState } from 'react';
import { FaClock } from "react-icons/fa";

const allTours = [
  { title: "Africa – Amazing African Safari", duration: "5 Hours", price: "$100", image: "/istock.jpg" },
  { title: "Dubai – All Stunning Places", duration: "7 Hours", price: "$1200", image: "/lower.jpg" },
  { title: "Paris – Romantic Escape", duration: "6 Hours", price: "$999", image: "/Omar.jpg" },
  { title: "New York – City Lights", duration: "8 Hours", price: "$1300", image: "/Travel4.jpg" },
  { title: "Tokyo – Night Adventures", duration: "4 Hours", price: "$890", image: "/Travel3.jpg" },
  { title: "Sydney – Coastal Highlights", duration: "3 Hours", price: "$950", image: "/Travel2.jpg" },
  { title: "Iceland – Northern Lights", duration: "5 Hours", price: "$1450", image: "/Travel6.jpg" },
  { title: "Bali – Beachside Retreat", duration: "6 Hours", price: "$780", image: "/TravelTour3.jpg" },
  { title: "Egypt – Ancient Wonders", duration: "7 Hours", price: "$1100", image: "/TravelTour2.jpg" },
  { title: "Rome – Historic Exploration", duration: "4 Hours", price: "$950", image: "/TravelTour3.jpg" },
  { title: "Bangkok – Cultural Discovery", duration: "3 Hours", price: "$650", image: "/TravelTour4.jpg" },
  { title: "Berlin – City & History", duration: "5 Hours", price: "$880", image: "/Travel4.jpg" },
  { title: "Moscow – Russian Heritage", duration: "6 Hours", price: "$1120", image: "/View2.jpg" },
  { title: "Cape Town – Mountain & Sea", duration: "4 Hours", price: "$1040", image: "/View1.jpg" },
  { title: "Barcelona – Urban Style", duration: "3 Hours", price: "$780", image: "/View3.jpg" },
  { title: "San Francisco – Tech Meets Culture", duration: "5 Hours", price: "$1200", image: "/View4.jpg" },
  { title: "Athens – Greek Classics", duration: "6 Hours", price: "$990", image: "/View5.jpg" },
  { title: "Lisbon – Streets & Stories", duration: "4 Hours", price: "$920", image: "/View6.jpg" },
  { title: "Prague – Fairytale City", duration: "5 Hours", price: "$1050", image: "/View7.jpg" },
  { title: "Beijing – Imperial Walk", duration: "7 Hours", price: "$990", image: "/View9.jpg" },
];

const itemsPerPage = 6;

const TourThumbnailStyle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTours = allTours.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="py-20 px-4 bg-gray-200">
      <h1 className="font-bold text-black text-center text-2xl sm:text-3xl mb-12">
        Tour Thumbnail Style - 3 Columns
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentTours.map((tour, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md group flex flex-col"
          >
            {/* Ribbon */}
            <div className="absolute top-2 left-0 bg-blue-500 text-white px-3 py-1 text-xs font-semibold z-10 rounded-r-md">
              Best Seller
            </div>

            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Content (always visible) */}
            <div className="relative z-20 bg-black bg-opacity-70 text-white p-4 mt-auto">
              <h3 className="text-base sm:text-lg font-bold mb-1">{tour.title}</h3>
              <div className="flex justify-between text-xs sm:text-sm items-center mb-2">
                <p className="flex items-center gap-1">
                  <FaClock className="text-blue-300" /> {tour.duration}
                </p>
                <p className="font-bold">{tour.price}</p>
              </div>
              <button className="mt-2 w-full text-sm bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded font-semibold">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2 flex-wrap">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded text-sm ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white border text-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourThumbnailStyle;
