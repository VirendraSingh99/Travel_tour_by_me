

import React, { useState } from 'react';

const imageUrls = [
  "/View1.jpg",
  "/View2.jpg",
  "/View3.jpg",
  "/View4.jpg",
  "/img5.jpg",
  "/img6.jpeg",
  "/img7.webp",
  "/img8.webp",
  "/img9.webp",
  "/img4.jpg",
  "/img11.webp",
  "/img12.webp",
  "/img13.webp",
  "/img14.jpg",
  "/img15.jpg",
  "/img16.jpg",
  "/img17.jpg",
  "/Travel2.jpg",
  "/TravelTour3.jpg",
  "/TravelTour4.jpg",
  "/View2.jpg"
];

const allCards = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  title: `Tour Title ${i + 1}`,
  location: `Location ${i + 1}`,
  price: `$${(2000 + i * 50).toLocaleString()}`,
  image: imageUrls[i],
  duration: `${3 + (i % 5)} Days ${2 + (i % 4)} Nights`,
  discount: i % 3 === 0 ? '15% Off' : null,
  oldPrice: i % 3 === 0 ? `$${(2500 + i * 60).toLocaleString()}` : null,
}));

const CardsPagination = () => {
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Top Title Section */}
      <div className=' py-10'>
        <h1 className='font-bold text-center text-black text-2xl md:text-6xl'>Tour Grid 3 Columns</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-16 gap-6">
        {currentCards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden w-full h-[420px]">
            <div className="relative">
              <img src={card.image} alt={card.title} className="w-full h-60 object-cover" />
              {card.discount && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {card.discount}
                </span>
              )}
            </div>
            <div className="p-2">
              <h3 className="text-base font-semibold text-gray-800 line-clamp-1">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-1 line-clamp-1">{card.location}</p>
              <div className="flex items-center text-yellow-500 mb-1">
                ★★★★★ <span className="text-gray-400 text-xs ml-1">(1 Review)</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">{card.duration}</p>
              <div className="mt-1">
                {card.oldPrice && (
                  <span className="text-sm line-through text-gray-400 mr-2">{card.oldPrice}</span>
                )}
                <span className="text-lg font-bold text-blue-600">{card.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsPagination;
