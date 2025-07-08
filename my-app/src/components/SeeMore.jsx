import React from "react";
import { Link } from "react-router-dom";

const SeeMore = () => {
  const cards = [
    { img: "/Stephan.jpg", titleTop: "Molokini and", titleBottom: "Turtle Snorkeling", price: "$80", rating: 5 },
    { img: "/benjamin.jpg", titleTop: "Mountain Hiking", titleBottom: "Adventure", price: "$120", rating: 4 },
    { img: "/Omar.jpg", titleTop: "City Night", titleBottom: "Walk Tour", price: "$60", rating: 4.5 },
    { img: "/niklolay.jpg", titleTop: "Sunset Desert", titleBottom: "Safari", price: "$150", rating: 4 },
    { img: "/Pascal.jpg", titleTop: "Romantic Lake", titleBottom: "Cruise", price: "$100", rating: 5 },
    { img: "/geran.jpg", titleTop: "Forest Cabin", titleBottom: "Stay", price: "$200", rating: 4.5 },
    { img: "/sorasask.jpg", titleTop: "Art & Culture", titleBottom: "Workshop", price: "$90", rating: 4 },
    { img: "/Victor.jpg", titleTop: "Jungle Wildlife", titleBottom: "Safari", price: "$250", rating: 5 },
    { img: "/istock.jpg", titleTop: "Snow Skiing", titleBottom: "Experience", price: "$300", rating: 4.8 },
  ];

  return (
    <div className="bg-slate-200 px-4 py-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <Link to="/see-more">
          <button className="text-blue-600 font-semibold text-lg md:text-xl hover:underline transition duration-300 mb-2">
            See More →
          </button>
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Freshly <span className="text-blue-500">Added</span>
        </h1>
      </div>

      {/* Cards Scroll Container */}
      <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:scroll-smooth sm:whitespace-nowrap gap-8 px-2 sm:px-6 md:px-14 no-scrollbar">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-64 sm:min-w-[250px] inline-block hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={card.img}
                alt={`${card.titleTop} ${card.titleBottom}`}
                className="w-full h-56 sm:h-60 object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Best Seller
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-1">{card.titleTop}</p>
              <h3 className="text-lg font-bold text-black mb-1">{card.titleBottom}</h3>
              <p className="text-sm text-orange-500 mb-2">
                {"★".repeat(Math.floor(card.rating))}
                {card.rating % 1 !== 0 ? "½" : ""}{" "}
                <span className="text-gray-500 ml-1">({card.rating} Rating)</span>
              </p>
              <p className="text-sm text-gray-700">
                From <span className="text-blue-600 font-semibold">{card.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center text-black underline underline-offset-4 decoration-2 py-6 mt-10 font-bold text-sm md:text-2xl hover:text-blue-600 hover:decoration-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <Link to="/view-all-tours">View All Tours →</Link>
      </div>
    </div>
  );
};

export default SeeMore;
