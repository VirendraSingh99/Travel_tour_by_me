
import React, { useState } from "react";

const Destination1 = () => {
  return (
    <div className="bg-gray-100 px-4 py-28 md:py-52 text-center font-bold">
      <h1 className="text-black text-4xl md:text-7xl">Destinations</h1>
      <p className="py-6 text-xl md:text-3xl">Explore Tours By Destinations</p>
    </div>
  );
};

const DestinationCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      img: "/Travel1.jpg",
      destination: "Paris, France",
      overlay: "Romantic Getaway",
      description:
        "Explore the City of Light with its iconic Eiffel Tower and romantic cafes.",
    },
    {
      img: "/Travel2.jpg",
      destination: "Kyoto, Japan",
      overlay: "Cultural Escape",
      description:
        "Discover tranquil temples, traditional tea houses, and cherry blossoms.",
    },
    {
      img: "/Travel3.jpg",
      destination: "Rome, Italy",
      overlay: "Historical Charm",
      description:
        "Walk through history with visits to the Colosseum, Vatican, and more.",
    },
    {
      img: "/Travel4.jpg",
      destination: "New York City, USA",
      overlay: "Urban Adventure",
      description:
        "Experience the energy of the Big Apple with skyscrapers and Broadway.",
    },
    {
      img: "/Travel5.jpg",
      destination: "Cape Town, South Africa",
      overlay: "Wildlife & Views",
      description:
        "Adventure awaits with Table Mountain, beaches, and vibrant culture.",
    },
    {
      img: "/Travel6.jpg",
      destination: "Sydney, Australia",
      overlay: "Coastal Vibes",
      description:
        "Enjoy the stunning harbor, Opera House, and sun-soaked beaches.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300"
          >
            <div
              className="relative cursor-pointer group"
              onClick={() => toggleExpand(index)}
            >
              <img
                src={card.img}
                alt={card.destination}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold px-4 py-2">
                {card.overlay}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {card.destination}
              </h3>
              {expandedCard === index && (
                <p className="mt-2 text-sm text-gray-600 transition-all duration-300">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Destination = () => {
  return (
    <div>
      <Destination1 />
      <DestinationCards />
    </div>
  );
};

export default Destination;
