import React, { useState } from "react";
import { FaRegClock, FaRegFolder, FaRegComment } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

// ✅ Image URLs + Post Data
const posts = [
  {
    id: 1,
    title: "Pack wisely before traveling",
    date: "June 6, 2016",
    author: "John Doe",
    category: "Blog, Travel",
    comments: 1,
    excerpt: "A wonderful serenity has taken possession of my entire soul...",
    image: "/CardImg1.jpg",
  },
  {
    id: 2,
    title: "Exploring the mountain views",
    date: "June 7, 2016",
    author: "John Doe",
    category: "Nature, Adventure",
    comments: 2,
    excerpt: "Let your soul relax amidst the serene mountain breeze...",
    image: "/CardImg2.jpg",
  },
  {
    id: 3,
    title: "Beach vibes and sunsets",
    date: "June 8, 2016",
    author: "John Doe",
    category: "Beach, Vacation",
    comments: 3,
    excerpt: "Feel the golden sands and the crashing waves...",
    image: "/CardImg3.jpg",
  },
  {
    id: 4,
    title: "City lights and skyline",
    date: "June 9, 2016",
    author: "John Doe",
    category: "Urban, City",
    comments: 4,
    excerpt: "Nightlife in the city that never sleeps...",
    image: "/CardImg4.jpg",
  },
  {
    id: 5,
    title: "Hiking into the wild",
    date: "June 10, 2016",
    author: "John Doe",
    category: "Hiking, Nature",
    comments: 5,
    excerpt: "Every step into the forest reveals a new story...",
    image: "/CardImg5.jpg",
  },
  {
    id: 6,
    title: "Calm lake reflections",
    date: "June 11, 2016",
    author: "John Doe",
    category: "Water, Calm",
    comments: 6,
    excerpt: "Still water speaks louder than words...",
    image: "/CardImg6.jpg",
  },
  {
    id: 7,
    title: "Chasing waterfalls",
    date: "June 12, 2016",
    author: "John Doe",
    category: "Nature, Travel",
    comments: 7,
    excerpt: "The power of nature captured in falling water...",
    image: "/CardImg7.jpg",
  },
  {
    id: 8,
    title: "Exploring the desert dunes",
    date: "June 13, 2016",
    author: "John Doe",
    category: "Desert, Adventure",
    comments: 8,
    excerpt: "Golden sands stretch to the horizon...",
    image: "/CardImg8.jpg",
  },
  {
    id: 9,
    title: "Sunrise in the jungle",
    date: "June 14, 2016",
    author: "John Doe",
    category: "Jungle, Wildlife",
    comments: 9,
    excerpt: "The jungle awakens in a symphony of sound...",
    image: "/CardImg9.jpg",
  },
  {
    id: 10,
    title: "Road trip to nowhere",
    date: "June 15, 2016",
    author: "John Doe",
    category: "Road Trip, Solo",
    comments: 10,
    excerpt: "Freedom lies in the open road...",
    image: "/CardImg10.jpg",
  },
  {
    id: 11,
    title: "Street food adventures",
    date: "June 16, 2016",
    author: "John Doe",
    category: "Food, Travel",
    comments: 11,
    excerpt: "Taste the world one bite at a time...",
    image: "/TravelTour2.jpg",
  },
  {
    id: 12,
    title: "Frozen landscapes",
    date: "June 17, 2016",
    author: "John Doe",
    category: "Winter, Snow",
    comments: 12,
    excerpt: "Snow-covered serenity at every turn...",
    image: "/TravelTour3.jpg",
  },
  {
    id: 13,
    title: "Island hopping adventure",
    date: "June 18, 2016",
    author: "John Doe",
    category: "Island, Water",
    comments: 13,
    excerpt: "Hop from island to island, discovering paradise...",
    image: "/Travel4.jpg",
  },
  {
    id: 14,
    title: "Camping under the stars",
    date: "June 19, 2016",
    author: "John Doe",
    category: "Camping, Nature",
    comments: 14,
    excerpt: "Stars overhead and a fire below...",
    image: "/Travel5.jpg",
  },
  {
    id: 15,
    title: "Riding through the forest",
    date: "June 20, 2016",
    author: "John Doe",
    category: "Biking, Forest",
    comments: 15,
    excerpt: "The forest trail leads to peace and calm...",
    image: "/Travel4.jpg",
  },
  {
    id: 16,
    title: "Boating through canals",
    date: "June 21, 2016",
    author: "John Doe",
    category: "Boating, Europe",
    comments: 16,
    excerpt: "Charming canal rides through old cities...",
    image: "/Travel3.jpg",
  },
  {
    id: 17,
    title: "Holi celebrations in India",
    date: "June 22, 2016",
    author: "John Doe",
    category: "Festival, Culture",
    comments: 17,
    excerpt: "Color, chaos, and celebration...",
    image: "/Travel2.jpg",
  },
  {
    id: 18,
    title: "Safari in Africa",
    date: "June 23, 2016",
    author: "John Doe",
    category: "Wildlife, Safari",
    comments: 18,
    excerpt: "The wild calls and we must answer...",
    image: "/Travel1.jpg",
  },
];


const BlogCard = ({ post }) => (
  <div className="max-w-[900px] mx-auto border border-gray-300 rounded-lg overflow-hidden shadow bg-white mb-8">
    {/* Image */}
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[300px] object-cover"
      />
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
        STICKY POST
      </span>
    </div>

    {/* Text Content */}
    <div className="p-6">
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
        <span className="flex items-center gap-1"><FaRegClock /> {post.date}</span>
        <span className="flex items-center gap-1"><MdContentCopy /> {post.author}</span>
        <span className="flex items-center gap-1"><FaRegFolder /> {post.category}</span>
        <span className="flex items-center gap-1"><FaRegComment /> {post.comments}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>

      {/* Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>

      {/* Button */}
      <button className="bg-blue-600 text-white px-5 py-2 text-sm rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>
);

const Sidebar = () => (
  <div className="space-y-10">
    <div>
      <h3 className="text-lg font-semibold mb-2">Text Widget</h3>
      <p className="text-gray-600 text-sm">
        Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li className="border-b pb-2">John on <span className="text-blue-600">Beach vibes</span></li>
        <li className="border-b pb-2">Jane on <span className="text-blue-600">City lights</span></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Tag Cloud</h3>
      <div className="flex flex-wrap gap-2">
        {["Beach", "Nature", "City", "Travel", "Adventure"].map(tag => (
          <span key={tag} className="border border-gray-300 px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Blog Cards */}
        <div className="lg:col-span-3">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right: Sidebar */}
        <Sidebar />
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "hover:bg-blue-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
