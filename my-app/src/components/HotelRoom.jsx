// import React from 'react';

// const HotelRoom = () => {
//   const cards = [
//     {
//       img: "/Room1.jpg",
//       titleTop: "For Living",
//       titleBottom: "Standard Deluxe",
//       price: "$80",
//       rating: 5,
//     },
//     {
//       img: "/Room2.jpg",
//       titleTop: "For Living",
//       titleBottom: "Luxury Suite",
//       price: "$120",
//       rating: 4,
//     },
//     {
//       img: "/Room4.jpg",
//       titleTop: "For Living",
//       titleBottom: "The Penthouse",
//       price: "$60",
//       rating: 4.5,
//     },
//     {
//       img: "/Room6.jpg",
//       titleTop: "For Living",
//       titleBottom: "Grand Suite Room",
//       price: "$150",
//       rating: 4,
//     },
//     {
//       img: "/Room7.jpg",
//       titleTop: "For Living",
//       titleBottom: "Junior Suite Room",
//       price: "$100",
//       rating: 5,
//     },
//     {
//       img: "/Room8.jpg",
//       titleTop: "For Living",
//       titleBottom: "Standard Room",
//       price: "$200",
//       rating: 4.5,
//     },
//   ];

//   return (
//     <div className="bg-slate-200 px-4 py-10">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
//           Hotel <span className="text-blue-500">Rooms</span>
//         </h1>
//       </div>

//       {/* Cards Section */}
//       <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:scroll-smooth sm:whitespace-nowrap gap-6 sm:px-8 md:px-14 no-scrollbar">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-64 sm:min-w-[250px] inline-block hover:scale-105 transition-transform duration-300"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={card.img}
//                 alt={card.titleBottom}
//                 className="w-full h-56 sm:h-60 object-cover"
//               />
//               <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                 70% Off
//               </span>
//             </div>

//             {/* Content */}
//             <div className="p-4">
//               <p className="text-sm text-gray-600 mb-1">{card.titleTop}</p>
//               <h3 className="text-lg font-bold text-black mb-1">
//                 {card.titleBottom}
//               </h3>
//               <p className="text-sm text-orange-500 mb-2">
//                 {"★".repeat(Math.floor(card.rating))}
//                 {card.rating % 1 !== 0 ? "½" : ""}{" "}
//                 <span className="text-gray-500 ml-1">
//                   ({card.rating} Rating)
//                 </span>
//               </p>
//               <p className="text-sm text-gray-700">
//                 From{" "}
//                 <span className="text-blue-600 font-semibold">
//                   {card.price}
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All CTA */}
//       <div className="text-center text-black underline underline-offset-4 decoration-2 py-6 mt-10 font-bold text-sm md:text-2xl hover:text-blue-600 hover:decoration-4 hover:scale-105 transition-all duration-300 cursor-pointer">
//         <a href="/view-all-rooms">View All Rooms →</a>
//       </div>
//     </div>
//   );
// };

// export default HotelRoom;
// HotelRoom.jsx
import React from "react";
import { Link } from "react-router-dom";

const HotelRoom = () => {
  const cards = [
    { img: "/Room1.jpg", titleTop: "For Living", titleBottom: "Standard Deluxe", price: "$80", rating: 5 },
    { img: "/Room2.jpg", titleTop: "For Living", titleBottom: "Luxury Suite", price: "$120", rating: 4 },
    { img: "/Room4.jpg", titleTop: "For Living", titleBottom: "The Penthouse", price: "$60", rating: 4.5 },
    { img: "/Room6.jpg", titleTop: "For Living", titleBottom: "Grand Suite Room", price: "$150", rating: 4 },
    { img: "/Room7.jpg", titleTop: "For Living", titleBottom: "Junior Suite Room", price: "$100", rating: 5 },
    { img: "/Room8.jpg", titleTop: "For Living", titleBottom: "Standard Room", price: "$200", rating: 4.5 },
  ];

  return (
    <div className="bg-slate-200 px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Hotel <span className="text-blue-500">Rooms</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:scroll-smooth sm:whitespace-nowrap gap-6 sm:px-8 md:px-14 no-scrollbar">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-64 sm:min-w-[250px] inline-block hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={card.img}
                alt={card.titleBottom}
                className="w-full h-56 sm:h-60 object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                70% Off
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
                From{" "}
                <span className="text-blue-600 font-semibold">{card.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA using Link for client-side navigation */}
      <div className="text-center mt-10">
        <Link
          to="/view-all-rooms"
          className="text-black underline underline-offset-4 decoration-2 font-bold text-sm md:text-2xl hover:text-blue-600 hover:decoration-4 hover:scale-105 transition-all duration-300"
        >
          View All Rooms →
        </Link>
      </div>
    </div>
  );
};

export default HotelRoom;
