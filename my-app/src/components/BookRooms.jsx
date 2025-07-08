import React, { useRef } from "react";

const BookRooms = () => {
  const moreRoomsRef = useRef();

  // ✅ Change these image URLs as per your need
  const moreRoomImages = [
    "https://via.placeholder.com/600x400?text=Room+1",
    "https://via.placeholder.com/600x400?text=Room+2",
    "https://via.placeholder.com/600x400?text=Room+3",
    "https://via.placeholder.com/600x400?text=Room+4",
    "https://via.placeholder.com/600x400?text=Room+5",
    "https://via.placeholder.com/600x400?text=Room+6",
  ];

  return (
    <div className="px-4 py-16 bg-white max-w-7xl mx-auto">
      {/* Title and Meta */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Standard Deluxe</h2>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span className="text-yellow-500 mr-1">★★★★★</span> (1 Review)
        </div>
      </div>

      {/* Room Features */}
      <div className="flex flex-wrap gap-4 text-gray-600 text-sm border-t pt-4 border-gray-200 mb-6">
        <div className="flex items-center gap-1">🛏 2 King Beds</div>
        <div className="flex items-center gap-1">👨‍👩‍👧 Max: 6 Guests</div>
        <div className="flex items-center gap-1">📐 45 sqm</div>
        <div className="flex items-center gap-1">🌆 City View</div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-10">
        <div className="lg:col-span-3">
          <img
            src="/Room1.jpg"
            alt="Room"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-2">
          <img
            src="/Room4.jpg"
            alt="Side 1"
            className="h-48 w-full object-cover"
          />
          <img
            src="/Room6.jpg"
            alt="Side 2"
            className="h-48 w-full object-cover"
          />
          <img
            src="/Room2.jpg"
            alt="Side 3"
            className="h-48 w-full object-cover"
          />
          <img
            src="/Room1.jpg"
            alt="Side 4"
            className="h-48 w-full object-cover"
          />
        </div>
      </div>

      {/* Description & Booking Form */}
      <div className="lg:flex lg:gap-10">
        {/* Description */}
        <div className="lg:w-2/3 text-gray-700 text-sm leading-7">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts...
          </p>
          <p className="mt-4">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli... Far far
            away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean. A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an
            almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World
            of Grammar. The Big Oxmox advised her not to do so, because there
            were thousands of bad Commas, wild Question Marks and devious
            Semikoli, but the Little Blind Text didn’t listen. She packed her
            seven versalia, put her initial into the belt and made herself on
            the way. When she reached the first hills of the Italic Mountains,
            she had a last view back on the skyline of her hometown
          </p>
          <div className="mt-6 text-lg">
            From <span className="line-through text-gray-400 mr-2">$90.00</span>
            <span className="font-semibold text-black">$75.00</span> per night
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-5">
            <h3 className="text-lg font-semibold mb-2">Book Your Room</h3>
            <div>
              <label className="block text-sm mb-1">Check In</label>
              <input
                type="date"
                defaultValue="2025-07-04"
                className="w-full border px-3 py-2 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Check Out</label>
              <input
                type="date"
                defaultValue="2025-07-05"
                className="w-full border px-3 py-2 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Room</label>
              <select className="w-full border px-3 py-2 rounded-md text-sm">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Guests</label>
              <select className="w-full border px-3 py-2 rounded-md text-sm">
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Hotel Rules */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Hotel Rules</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Check-in: 3:00 PM - Check-out: 11:00 AM</li>
          <li>No smoking in the rooms</li>
          <li>No pets allowed</li>
          <li>Guests must be 18+ to check in</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {[
            "/Room1.jpg",
            "/Room7.jpg",
            "/Room2.jpg",
            "/Room4.jpg",
            "/Room8.jpg",
            "/Room6.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-[380px] w-[600px] object-cover flex-shrink-0 rounded-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-20 border-t pt-10">
        <h3 className="text-2xl font-semibold mb-6">Reviews</h3>

        {/* Header: Total Reviews and Sort By */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-700">
          <div className="flex items-center">
            <span className="mr-2 font-medium">1 Review</span>
            <span className="text-yellow-500">★★★★☆</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Sort By:</span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Rating</option>
              <option>Date</option>
            </select>
          </div>
        </div>

        {/* Single Review */}
        <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm bg-gray-50">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
            ?
          </div>
          <div>
            <h4 className="font-semibold text-base">Jenny</h4>
            <p className="text-gray-500 text-sm mt-1">Nice hotel</p>
            <div className="text-yellow-500 text-sm mt-2">★★★★☆</div>
            <p className="text-gray-400 text-xs mt-1">August 3, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRooms;
