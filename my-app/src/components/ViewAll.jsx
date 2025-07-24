



import React from "react";
import { NavLink } from "react-router-dom";
import { FaClock } from "react-icons/fa";

const allTours = [
  {
    title: "Africa – Amazing African Safari",
    duration: "5 Hours",
    price: "$100",
    image: "/CardImg1.jpg",
  },
  {
    title: "Dubai – All Stunning Places",
    duration: "7 Hours",
    price: "$1200",
    image: "/CardImg2.jpg",
  },
  {
    title: "France – Romantic Paris",
    duration: "8 Hours",
    price: "$900",
    image: "/CardImg3.jpg",
  },
  {
    title: "India – Golden Triangle Tour",
    duration: "10 Hours",
    price: "$600",
    image: "/CardImg4.jpg",
  },
];

const ViewAll = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Tour Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {allTours.map((tour, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800">{tour.title}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <FaClock className="mr-1" />
                {tour.duration}
              </div>
              <p className="text-lg font-bold text-blue-600">{tour.price}</p>
              <NavLink
                to="/Tour"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
