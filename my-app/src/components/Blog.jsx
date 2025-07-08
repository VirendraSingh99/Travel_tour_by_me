

import React, { useState } from "react";
import { FaRegClock, FaRegComment, FaRegFolder } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

// ✅ Make sure these images exist inside the public folder
const blogData = [
  {
    image: "/img1.jpg",
    title: "Explore the Mountains",
    date: "June 6, 2016",
    author: "John Doe",
    excerpt: "Discover breathtaking views and fresh air.",
  },
  {
    image: "/img2.jpg",
    title: "City Lights at Night",
    date: "June 7, 2016",
    author: "Jane Smith",
    excerpt: "The best urban destinations to visit this year.",
  },
  {
    image: "/img3.jpg",
    title: "Desert Adventures",
    date: "June 8, 2016",
    author: "Alex Wilson",
    excerpt: "Experience the thrill of desert safaris.",
  },
  {
    image: "/img4.jpg",
    title: "Tropical Paradise",
    date: "June 9, 2016",
    author: "Emily Clark",
    excerpt: "Relax under palm trees by the ocean breeze.",
  },
  {
    image: "/img5.jpg",
    title: "Cultural Escapades",
    date: "June 10, 2016",
    author: "Michael Ray",
    excerpt: "Dive into rich history and traditions.",
  },
  {
    image: "/img16.jpg",
    title: "Wildlife Safari",
    date: "June 11, 2016",
    author: "Samantha Lee",
    excerpt: "Get close to nature in a thrilling way.",
  },
  {
    image: "/img7.webp",
    title: "Foodie’s Journey",
    date: "June 12, 2016",
    author: "Kevin Brooks",
    excerpt: "Taste your way through famous cuisines.",
  },
  {
    image: "/img8.webp",
    title: "Hidden Waterfalls",
    date: "June 13, 2016",
    author: "Natalie Moore",
    excerpt: "Find peace in secret natural escapes.",
  },
  {
    image: "/img9.webp",
    title: "Street Photography",
    date: "June 14, 2016",
    author: "Daniel Ross",
    excerpt: "Capture the soul of a city with your lens.",
  },
  {
    image: "/img10.webp",
    title: "Historic Castles",
    date: "June 14, 2016",
    author: "Olivia White",
    excerpt: "Step back in time through ancient walls.",
  },
  {
    image: "/img16.jpg",
    title: "Island Getaways",
    date: "June 16, 2016",
    author: "Sarah Young",
    excerpt: "Escape to a serene island life.",
  },
  {
    image: "/img15.jpg",
    title: "Adventure Trails",
    date: "June 17, 2016",
    author: "Chris Ford",
    excerpt: "Trek through the most thrilling trails.",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(blogData.length / cardsPerPage);

  const handleClick = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  const paginatedData = blogData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-10 max-w-[1300px] mx-auto">
        {/* Blog Cards Section */}
        <div className="flex flex-col gap-6 w-full lg:w-[65%]">
          {paginatedData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded overflow-hidden w-full"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 bg-gray-100"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded">
                  STICKY POST
                </span>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-4 text-blue-700 text-xs mb-3">
                  <p className="flex items-center gap-1">
                    <FaRegClock /> {item.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <MdContentCopy /> {item.author}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaRegFolder /> Blog
                  </p>
                  <p className="flex items-center gap-1">
                    <FaRegComment /> 1
                  </p>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.excerpt}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[35%] space-y-10">
          <div>
            <h3 className="font-bold text-lg md:text-2xl mb-2">Text Widget</h3>
            <p className="text-sm text-gray-700">
              Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
              libero, a pharetra augue.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg md:text-2xl mb-2">
              Recent Comments
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>John Doe on Pack wisely before traveling</li>
              <li>Jane Smith on City Lights at Night</li>
              <li>Chris Ford on Adventure Trails</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg md:text-2xl mb-2">Tag Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 text-xs rounded">
                Article
              </span>
              <span className="bg-gray-200 px-3 py-1 text-xs rounded">
                City
              </span>
              <span className="bg-gray-200 px-3 py-1 text-xs rounded">
                Nature
              </span>
              <span className="bg-gray-200 px-3 py-1 text-xs rounded">
                News
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-12 gap-2 sm:gap-4">
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-black border"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
