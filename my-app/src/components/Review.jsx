

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      name: "Brittany Clark",
      location: "San Francisco",
      text: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!",
      img: "/P01-150x150.jpg",
      rating: 5,
    },
    {
      name: "Daniel Smith",
      location: "New York",
      text: "Absolutely wonderful experience! Everything was well organized. Would highly recommend to anyone looking for a great time.",
      img: "/P02-150x150.jpg",
      rating: 4,
    },
    {
      name: "Emily Johnson",
      location: "Chicago",
      text: "The best service ever! All the arrangements were top-notch. Thank you for such an amazing trip.",
      img: "/P07-150x150.jpg",
      rating: 5,
    },
    {
      name: "Michael Lee",
      location: "Los Angeles",
      text: "Had a great time with the team. Very helpful and prompt service. Will come back again for sure!",
      img: "/P04-150x150.jpg",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentReview = reviews[activeIndex];

  return (
    <div className="bg-slate-200 py-16 px-4">
      {/* Heading */}
      <h1 className="font-bold text-blue-400 text-center text-2xl sm:text-6xl py-10 mb-10 leading-relaxed">
        What our customers are <br /> saying about us
      </h1>

      {/* Review Card */}
      <div className="flex flex-col items-center">
        <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-10 lg:p-24 max-w-4xl text-center">
          {/* Stars in top-right */}
          <div className="absolute top-6 right-6 flex text-yellow-400 text-lg sm:text-xl">
            {Array.from({ length: currentReview.rating }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4 mb-4 justify-center">
            <img
              src={currentReview.img}
              alt={currentReview.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900">{currentReview.name}</p>
              <p className="text-gray-500 text-sm">{currentReview.location}</p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {currentReview.text}
          </p>
        </div>

        {/* Dots */}
        <div className="flex mt-6 space-x-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              className={`w-2  h-10 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-blue-400" : "bg-gray-400"
              } hover:scale-110`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
