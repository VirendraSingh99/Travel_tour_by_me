

import React from "react";

const images = [
  {
    src: "img1.jpg",
    title: "Golden Gate Bridge",
  },
  {
    src: "img2.jpg",
    title: "Introducing this amazing city",
  },
  {
    src: "img3.jpg",
    title: "Historical Architecture",
  },
  {
    src: "img4.jpg",
    title: "Wildlife Adventures",
  },
  {
    src: "img5.jpg",
    title: "Explore the Sky",
  },
  {
    src: "img6.jpeg",
    title: "Island Escape",
  },
  {
    src: "img7.webp",
    title: "Urban Vibes",
  },
  {
    src: "img8.webp",
    title: "Desert Trails",
  },
  {
    src: "img9.webp",
    title: "Ocean Bliss",
  },
];

const BlogGrid = () => {
  return (
    <div>
      {/* Heading */}
      <div className="py-20 bg-gray-100">
        <h1 className="font-bold text-3xl md:text-6xl text-center text-black">
          Blog Grid 3 Columns No Space
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden group h-72 sm:h-80 md:h-96"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-lg font-bold text-center px-2">
                {img.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
