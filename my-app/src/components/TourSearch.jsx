import React, { useState } from "react";

const allCards = [
  {
    id: 1,
    title: "Beach Paradise",
    image: "/images/beach.jpg",
    price: "₹12,000",
    rating: 4,
    month: "July",
    destination: "Goa",
  },
  {
    id: 2,
    title: "Mountain Retreat",
    image: "/images/mountain.jpg",
    price: "₹15,500",
    rating: 5,
    month: "August",
    destination: "Manali",
  },
  {
    id: 3,
    title: "Desert Safari",
    image: "/images/desert.jpg",
    price: "₹10,000",
    rating: 3,
    month: "September",
    destination: "Jaisalmer",
  },
  {
    id: 4,
    title: "Backwaters Tour",
    image: "/images/backwaters.jpg",
    price: "₹14,000",
    rating: 4,
    month: "July",
    destination: "Kerala",
  },
  {
    id: 5,
    title: "Snow Trekking",
    image: "/images/snow.jpg",
    price: "₹18,000",
    rating: 5,
    month: "December",
    destination: "Kedarkantha",
  },
  {
    id: 6,
    title: "Cultural City Walk",
    image: "/images/city.jpg",
    price: "₹9,000",
    rating: 2,
    month: "October",
    destination: "Varanasi",
  },
  {
    id: 7,
    title: "Island Cruise",
    image: "/images/island.jpg",
    price: "₹20,000",
    rating: 5,
    month: "July",
    destination: "Andaman",
  },
  {
    id: 8,
    title: "Adventure Camp",
    image: "/images/camp.jpg",
    price: "₹13,000",
    rating: 3,
    month: "August",
    destination: "Rishikesh",
  },
  // Add more if needed
];

const TourSearch = () => {
  const [ratingFilter, setRatingFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const filteredCards = allCards.filter((card) => {
    const matchRating = ratingFilter ? card.rating === parseInt(ratingFilter) : true;
    const matchMonth = monthFilter ? card.month === monthFilter : true;
    const matchDestination = destinationFilter
      ? card.destination.toLowerCase().includes(destinationFilter.toLowerCase())
      : true;
    return matchRating && matchMonth && matchDestination;
  });

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Your Tour</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
        </select>

        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Months</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="December">December</option>
        </select>

        <input
          type="text"
          placeholder="Search Destination"
          value={destinationFilter}
          onChange={(e) => setDestinationFilter(e.target.value)}
          className="px-4 py-2 border rounded w-60"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedCards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-right">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600">Destination: {card.destination}</p>
              <p className="text-sm text-gray-600">Month: {card.month}</p>
              <p className="text-sm text-gray-600">Rating: {card.rating}⭐</p>
              <p className="text-lg font-semibold text-indigo-600">{card.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourSearch;
