import React from "react";

const blogs = [
  {
    img: "CardImg1.jpg",
    title: "Pack wisely before traveling",
    date: "June 6, 2016",
    author: "John Doe",
    category: "Blog, Uncategorized",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...",
    tag: "STICKY POST",
  },
  {
    img: "CardImg2.jpg",
    title: "How to travel with paper map",
    date: "June 6, 2016",
    author: "John Doe",
    category: "Blog, Uncategorized",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...",
  },
  {
    img: "CardImg3.jpg",
    title: "Introducing this amazing city",
    date: "June 6, 2016",
    author: "John Doe",
    category: "Masonry, Uncategorized",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...",
  },
  {
    img: "CardImg4.jpg",
    title: "Explore the wild nature",
    date: "June 7, 2016",
    author: "Jane Smith",
    category: "Nature, Forest",
    description:
      "The trees whisper secrets of the forest while birds sing songs of serenity. Nature wraps me in its calm embrace.",
  },
  {
    img: "CardImg5.jpg",
    title: "City lights and night vibes",
    date: "June 8, 2016",
    author: "John Doe",
    category: "Travel, City",
    description:
      "The city at night is a symphony of lights and sounds, full of mystery and life waiting to be explored.",
  },
  {
    img: "CardImg6.jpg",
    title: "Sunset on the coast",
    date: "June 9, 2016",
    author: "Emily Rose",
    category: "Travel, Beach",
    description:
      "Waves crash gently on the shore while the sun dips below the horizon, painting the sky with dreams.",
  },
  {
    img: "CardImg7.jpg",
    title: "The art of hiking solo",
    date: "June 10, 2016",
    author: "Mark Twain",
    category: "Adventure, Tips",
    description:
      "Step by step, I find myself through the winding paths of the mountains. Hiking solo is a journey inward.",
  },
  {
    img: "CardImg8.jpg",
    title: "Modern architecture tour",
    date: "June 11, 2016",
    author: "John Doe",
    category: "Architecture",
    description:
      "Glass and steel rise with elegance, showcasing the marvels of modern design and creativity.",
  },
  {
    img: "CardImg9.jpg",
    title: "Crossing the golden sands",
    date: "June 12, 2016",
    author: "Lara Bloom",
    category: "Adventure, Desert",
    description:
      "The desert stretches infinitely with stories in every grain. A test of endurance and beauty.",
  },
];

const BlogCards = () => {
  return (
    <div>
      {/* Top Heading Section */}
      <div className="py-20 bg-gray-100 ">
        <h1 className="font-bold text-3xl md:text-6xl text-center text-black">
          Blog Grid 3 Columns With Content
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="px-6 py-16 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white  shadow-xl overflow-hidden transition-transform hover:scale-[1.06]"
            >
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-[450px] object-cover"
                />
                {blog.tag && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {blog.tag}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {blog.category}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  {blog.date} • {blog.author}
                </p>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
