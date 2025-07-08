import React, { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaGlobe,
  FaLandmark,
  FaStar,
} from "react-icons/fa";

const reviews = [
  {
    name: "David Doe",
    role: "Traveler",
    image: "/Team1.jpg",
    stars: 5,
    message:
      "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!",
  },
  {
    name: "Sarah Lee",
    role: "Adventurer",
    image: "/team2.jpg",
    stars: 5,
    message:
      "Amazing experience with excellent guides. The destinations were well planned and beautiful!",
  },
  {
    name: "Mark Brown",
    role: "Solo Traveler",
    image: "/team3.jpg",
    stars: 5,
    message:
      "As a solo traveler, I felt completely safe and welcomed. Great customer service throughout!",
  },
  {
    name: "Linda Smith",
    role: "Explorer",
    image: "/team4.jpg",
    stars: 5,
    message:
      "Highly recommend for adventure lovers. Every detail was taken care of by the team!",
  },
];

const OurServices = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => setShowIframe(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="w-full bg-slate-200">
      <div className="text-center text-black py-20">
        <h1 className="font-bold text-5xl md:text-8xl">Our Services</h1>
        <p className="text-gray-600 text-3xl md:text-2xl font-semibold py-4">
          What we do
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20">
        <div className="md:w-1/2">
          <button className="bg-white text-teal-400 px-6 rounded-2xl shadow-md">
            Great Service, Great Price!
          </button>
          <p className="text-black text-2xl md:text-5xl font-bold py-10">
            Freedom to discover,<br />Confidence to explore
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation.
          </p>
          <div className="py-10">
            <button className="bg-blue-400 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-500 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-xl">
            {!showIframe ? (
              <div className="relative cursor-pointer" onClick={handlePlay}>
                <img
                  src="/img-play.jpg"
                  alt="Video thumbnail"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/L3V7LKYPIUQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-slate-200 px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-28">
          Any questions? Feel free to ask us!
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              <strong className="text-black">
                Have a question or comment about us?
              </strong>{" "}
              We love hearing from you! Complete the form and a member of our
              Customer Care team will get back to you soon.
            </p>
            <p className="text-base md:text-lg">
              Your Customer Care team is just a phone call away at
            </p>
            <p className="text-blue-500 text-base md:text-lg font-medium">
              212–343–7012.
            </p>
            <p className="text-blue-500 text-base md:text-lg">
              Monday – Saturday, 9AM–5PM EST.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-gray-200 shadow-md rounded-lg p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name*"
              className="w-full border px-4 py-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full border px-4 py-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject*"
              className="w-full border px-4 py-3 rounded-md focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message*"
              className="w-full border px-4 py-3 h-32 rounded-md focus:outline-none"
              required
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <label className="text-sm text-gray-600">
                by clicking here you agree to
                <a href="#" className="text-blue-500 underline">
                  our terms and policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      <div className="bg-slate-200 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          What our customers <br /> are saying about us
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md transition duration-1000 ease-in-out">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <img
              src={reviews[activeIndex].image}
              alt={reviews[activeIndex].name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-bold text-gray-900">
                {reviews[activeIndex].name}
              </h4>
              <p className="text-sm text-gray-500">
                {reviews[activeIndex].role}
              </p>
            </div>
            <div className="ml-auto flex text-yellow-400">
              {[...Array(reviews[activeIndex].stars)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-base">
            {reviews[activeIndex].message}
          </p>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
