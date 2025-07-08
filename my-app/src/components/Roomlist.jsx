

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Roomlist = () => {
  const navigate = useNavigate();

  const [roomCount, setRoomCount] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const toggleGuests = () => setIsGuestOpen(!isGuestOpen);
  const increment = (setter) => setter((prev) => prev + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter((prev) => prev - 1);
  };

  const roomImages = [
    { src: "/Room1.jpg", title: "Luxury Suite", price: "$90" },
    { src: "/Room2.jpg", title: "Deluxe Room", price: "$75" },
    { src: "/Room8.jpg", title: "Standard Room", price: "$60" },
    { src: "/Room4.jpg", title: "Executive Room", price: "$100" },
    { src: "/Room7.jpg", title: "Ocean View", price: "$120" },
    { src: "/Room6.jpg", title: "Presidential Suite", price: "$150" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-100 py-32 text-black-200 text-4xl text-center font-bold">
        <h1>Room Search</h1>
      </div>

      {/* Layout */}
      <div className="px-6 md:px-8 py-10 flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Form Column */}
        <div className="border-[3px] w-full lg:w-1/3 border-gray-300 p-8 text-black text-2xl font-bold space-y-4">
          <p>Check Availability</p>

          <div className="flex flex-col bg-gray-100 py-4 px-6 text-base font-normal rounded">
            <label htmlFor="checkIn" className="mb-1 font-bold">Check In</label>
            <input type="date" id="checkIn" className="border border-black p-2 rounded" />
          </div>

          <div className="flex flex-col bg-gray-100 py-4 px-6 text-base font-normal rounded">
            <label htmlFor="checkOut" className="mb-1 font-bold">Check Out</label>
            <input type="date" id="checkOut" className="border border-black p-2 rounded" />
          </div>

          <div className="flex flex-col bg-gray-100 py-4 px-6 text-base font-normal rounded">
            <label className="mb-2 font-bold">Rooms</label>
            <div className="flex items-center gap-4">
              <button onClick={() => decrement(setRoomCount, roomCount)} className="bg-red-500 text-white px-3 py-1 rounded" disabled={roomCount === 1}>−</button>
              <span className="text-xl">{roomCount}</span>
              <button onClick={() => increment(setRoomCount)} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
            </div>
          </div>

          {/* Guests */}
          <div className="relative bg-gray-100 py-4 px-6 text-base font-normal rounded cursor-pointer">
            <p className="text-black font-bold">Guests</p>
            <div onClick={toggleGuests} className="flex justify-between items-center mt-1 text-black font-semibold">
              <span>ADULTS {adults} &nbsp;&nbsp; CHILDREN {children}</span>
              <span className="text-xl">▾</span>
            </div>

            {isGuestOpen && (
              <div className="absolute bg-white shadow-md rounded p-4 mt-2 w-full z-10 space-y-3">
                <div className="flex justify-between font-bold items-center">
                  <span>Adults</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => decrement(setAdults, adults)} className="bg-red-500 text-white px-2 rounded">−</button>
                    <span>{adults}</span>
                    <button onClick={() => increment(setAdults)} className="bg-green-500 text-white px-2 rounded">+</button>
                  </div>
                </div>

                <div className="flex justify-between items-center font-bold">
                  <span>Children</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => decrement(setChildren, children)} className="bg-red-500 text-white px-2 rounded">−</button>
                    <span>{children}</span>
                    <button onClick={() => increment(setChildren)} className="bg-green-500 text-white px-2 rounded">+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="text-base font-normal bg-gray-100 py-4 px-6 rounded">
            <label className="block font-bold text-sm mb-2">Location</label>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label><input type="checkbox" className="mr-2" /> Europe</label>
              <label><input type="checkbox" className="mr-2" /> Asia</label>
              <label><input type="checkbox" className="mr-2" /> Australia</label>
              <label><input type="checkbox" className="mr-2" /> North America</label>
              <label><input type="checkbox" className="mr-2" /> South Africa</label>
            </div>
          </div>

          {/* Size */}
          <div className="text-base font-normal bg-gray-100 py-4 px-6 rounded">
            <label className="block font-bold text-sm mb-2">Size</label>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label><input type="checkbox" className="mr-2" /> Small</label>
              <label><input type="checkbox" className="mr-2" /> Medium</label>
              <label><input type="checkbox" className="mr-2" /> Large</label>
              <label><input type="checkbox" className="mr-2" /> Family</label>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 rounded-md transition duration-300">Search</button>
          </div>
        </div>

        {/* Room Cards Column */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          {roomImages.map((room, index) => (
            <div key={index} className="flex items-center justify-between bg-white shadow-md rounded-lg overflow-hidden p-4">
              <img
                src={room.src}
                alt={room.title}
                className="w-[400px] h-[250px] object-cover"
              />
              <div className="text-right w-full pl-6">
                <h2 className="text-xl font-bold">{room.title}</h2>
                <p className="text-gray-600 mt-1">
                  From <span className="text-black font-bold">{room.price}</span> / night
                </p>
                <button
                  onClick={() => navigate("/hotelbooking")}
                  className="mt-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roomlist;



