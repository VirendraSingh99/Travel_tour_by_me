
import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

const tours = [
  {
    image: "/img1.jpg",
    title: "Argentina – Great Diving Trip",
    duration: "2 Days 1 Nights",
    availability: "Apr - Aug",
    price: "$1,200",
    rating: 5,
    reviews: 1,
  },
  {
    image: "/img2.jpg",
    title: "India – Mumbai, New Delhi",
    duration: "5 Days 4 Nights",
    availability: "All Year",
    price: "$1,600",
    rating: 4,
    reviews: 2,
  },
  {
    image: "/img3.jpg",
    title: "Brazil – Rio de Janeiro",
    duration: "4 Days 3 Nights",
    availability: "Jan - Mar",
    price: "$1,900",
    rating: 4,
    reviews: 5,
  },
  {
    image: "/img4.jpg",
    title: "Norway – Heaven on Earth",
    duration: "6 Days 5 Nights",
    availability: "May - Sep",
    price: "$2,500",
    rating: 5,
    reviews: 3,
  },
  {
    image: "/img5.jpg",
    title: "America – Grand Canyon",
    duration: "3 Days 2 Nights",
    availability: "All Year",
    price: "$2,800",
    rating: 4,
    reviews: 6,
  },
  {
    image: "/View6.jpg",
    title: "Chile – Santiago, Wine Country",
    duration: "4 Days 3 Nights",
    availability: "Feb - May",
    price: "$1,900",
    rating: 5,
    reviews: 4,
  },
];

const TourCard = ({ tour }) => (
  <div className="bg-white shadow-md mb-8 w-full flex flex-col md:flex-row overflow-hidden">
    <img
      src={tour.image}
      alt={tour.title}
      className="w-full md:w-[380px] h-60 md:h-auto object-cover"
    />
    <div className="p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
      <p className="text-sm text-gray-600 mb-1">
        <FaCalendarAlt className="inline mr-1 text-blue-500" /> {tour.duration}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <FaCalendarAlt className="inline mr-1 text-blue-500" /> Availability:{" "}
        {tour.availability}
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Donec id elit non mi porta gravida at eget metus. Nulla vitae elit
        libero, [...]
      </p>
    </div>
    <div className="border-t md:border-l p-4 flex md:flex-col justify-between md:items-center text-center md:min-w-[150px]">
      <div>
        <p className="text-gray-500 text-xs">From</p>
        <p className="text-blue-600 font-bold text-lg">{tour.price}</p>
        <div className="text-yellow-400 text-sm mt-2">
          {"★".repeat(tour.rating)}
          {"☆".repeat(5 - tour.rating)}
        </div>
        <p className="text-xs text-gray-500">
          ({tour.reviews} Review{tour.reviews > 1 ? "s" : ""})
        </p>
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
          VIEW DETAILS
        </button>
      </div>
    </div>
  </div>
);

const ToursWithSidebar = () => {
  return (
    <div className="py-16 px-4 max-w-[1200px] mx-auto">
      {/* Search Filters */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <FaSearch className="text-gray-800" />
          <span className="text-gray-800">Search Tours</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Keywords"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <select className="w-full border border-gray-300 px-4 py-2 rounded text-gray-700 focus:outline-none">
            <option>Any</option>
            <option>Adventure</option>
            <option>Relaxation</option>
            <option>Wildlife</option>
          </select>
          <select className="w-full border border-gray-300 px-4 py-2 rounded text-gray-700 focus:outline-none">
            <option>Any</option>
            <option>1-5 Days</option>
            <option>6-10 Days</option>
            <option>10+ Days</option>
          </select>
          <select className="w-full border border-gray-300 px-4 py-2 rounded text-gray-700 focus:outline-none">
            <option>Any</option>
            <option>Hiking</option>
            <option>Safari</option>
            <option>Beach</option>
          </select>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Tour List & Sidebar */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[300px] space-y-10">
          {/* Latest Tours */}
          <div>
            <h3 className="font-bold text-lg mb-2">Latest Tours</h3>
            <ul className="space-y-3">
              {[
                { img: "/View1.jpg", title: "Africa – Amazing African Safari", price: "$100" },
                { img: "/View2.jpg", title: "Dubai – All Stunning Places", price: "$1,200" },
                {
                  img: "/View3.jpg",
                  title: "Venice, Rome and Milan",
                  price: "$3,500",
                  oldPrice: "$4,000",
                },
                { img: "/View7.jpg", title: "Paris – 6 Days", price: "$2,000" },
              ].map((item, i) => (
                <li className="flex items-center gap-3" key={i}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-500 line-through">
                      {item.oldPrice || ""}
                    </span>
                    <span className="text-xs text-blue-600 ml-1">
                      {item.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Confidence Box */}
          <div className="bg-white shadow rounded p-4">
            <h3 className="font-bold text-lg mb-2">Book With Confidence</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>No-hassle best price guarantee</li>
              <li>Customer care available 24/7</li>
              <li>Hand-picked Tours & Activities</li>
              <li>Free Travel Insurance</li>
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h3 className="font-bold text-lg mb-2">Recent Articles</h3>
            <ul className="space-y-3">
              <li className="text-sm text-blue-800 cursor-pointer hover:underline">
                How to travel with paper map
              </li>
              <li className="text-sm text-blue-800 cursor-pointer hover:underline">
                Change your place and get the fresh air
              </li>
              <li className="text-sm text-blue-800 cursor-pointer hover:underline">
                Even the all-powerful Pointing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursWithSidebar;
