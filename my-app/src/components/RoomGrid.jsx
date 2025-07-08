
import React from "react";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Luxury Suite",
    price: "$90",
    image: "/Room1.jpg",
    description: "Our Suites have been honored with the prestigious Five-Star Award by Forbes.",
    link: "/room-details",
    rating: 5,
    reviews: 8,
  },
  {
    title: "Standard Deluxe",
    price: "$75",
    oldPrice: "$90",
    discount: "17% OFF",
    image: "/Room2.jpg",
    description: "Our Suites have been honored with the prestigious Five-Star Award by Forbes.",
    link: "/room-details",
    rating: 4,
    reviews: 10,
  },
  {
    title: "The Penthouse",
    price: "$200",
    image: "/Room7.jpg",
    description: "Our Suites have been honored with the prestigious Five-Star Award by Forbes.",
    link: "/room-details",
    rating: 5,
    reviews: 3,
  },
  {
    title: "Executive Room",
    price: "$110",
    image: "/Room4.jpg",
    description: "Perfect for business travelers with a modern touch and comfort.",
    link: "/room-details",
    rating: 4,
    reviews: 6,
  },
  {
    title: "Junior Suite",
    price: "$150",
    image: "/Room8.jpg",
    description: "A balance of luxury and convenience with personalized service.",
    link: "/room-details",
    rating: 5,
    reviews: 9,
  },
  {
    title: "Classic Room",
    price: "$65",
    image: "/Room6.jpg",
    description: "A warm and cozy space for peaceful rest and comfort.",
    link: "/room-details",
    rating: 4,
    reviews: 12,
  },
];

const RoomGrid = () => {
  return (
    <div className="px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-2">Room Grid</h1>
      <p className="text-center text-gray-500 mb-10">Our Rooms</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <div key={index} className="space-y-3">
            {/* Image Box */}
            <div className="relative overflow-hidden shadow-md">
              <img src={room.image} alt={room.title} className="w-full h-60 object-cover" />
              <div className="absolute bottom-4 left-4 bg-black text-white text-sm px-3 py-3">
                From {room.price}
              </div>
              {room.oldPrice && (
                <div className="absolute bottom-4 left-[110px] bg-white text-black text-sm px-2 py-0.5 rounded line-through">
                  {room.oldPrice}
                </div>
              )}
              {room.discount && (
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {room.discount}
                </div>
              )}
            </div>

            {/* Title and Info */}
            <h2 className="text-xl font-bold">{room.title}</h2>
            <p className="text-gray-600 text-sm">{room.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-500 text-sm">★★★★★</div>
              <span className="text-sm text-gray-500">({room.reviews} Reviews)</span>
            </div>

            {/* Book Now Button */}
            <Link
              to="/BookRooms"
              className="inline-block mt-2 text-sm font-semibold text-black border-b border-black hover:text-blue-600 hover:border-blue-600 transition"
            >
              BOOK NOW →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGrid;
