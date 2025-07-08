
import React, { useState } from "react";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import {
  FaPlaneDeparture,
  FaGlobe,
  FaLandmark,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I get the refund?",
      answer:
        "We will email you as items in your order ship, or if there are updates on the status of your order.",
    },
    {
      question: "How many people can stay in the hotel?",
      answer:
        "Please allow up to 14 business days for your order to be delivered via our standard shipping method.",
    },
    {
      question: "Do you accept deposit payment?",
      answer:
        "We accept various payment methods including deposit. Contact support for more info.",
    },
    {
      question: "Which credit cards do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, and more.",
    },
    {
      question: "Are the tours included with travel fare?",
      answer:
        "Yes, most of our packages include travel fare. Please check individual package details.",
    },
    {
      question: "Are the tours included with meals?",
      answer:
        "Meal inclusion depends on the tour. Details are available in the itinerary.",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-300 py-20 px-4 md:px-16">
      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT IMAGE COLLAGE */}
        <div className="relative w-full md:w-1/2 h-[520px]">
          <img
            src="/img1.jpg"
            alt="Main"
            className="absolute top-0 left-0 w-[90%] h-full object-cover rounded-xl shadow-md"
          />
          <img
            src="/img15.jpg"
            alt="Temple"
            className="absolute w-36 h-48 object-cover top-4 right-1 rounded-md shadow-lg"
          />
          <img
            src="/img3.jpg"
            alt="House"
            className="absolute w-52 h-60 object-cover bottom-[-40px] right-[-20px] rounded-md shadow-lg"
          />
          <img
            src="/img4.jpg"
            alt="Ocean"
            className="absolute w-40 h-60 object-cover bottom-[-100px] left-8 rounded-md shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4 md:px-10">
            We have been in the tourism industry for more than 20 years
          </h2>
          <p className="text-gray-600 text-lg mb-6 px-4 md:px-10">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences.
          </p>

          {/* FEATURES */}
          <div className="space-y-5 px-4 md:px-10">
            <div className="flex items-start gap-4">
              <FaPlaneDeparture className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Book With Confidence
                </h4>
                <p className="text-gray-600">
                  Each trip is carefully crafted to let you enjoy the moment freely.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGlobe className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Freedom to Discover
                </h4>
                <p className="text-gray-600">
                  We help you explore the world with ease and confidence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLandmark className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Dive into Culture
                </h4>
                <p className="text-gray-600">
                  Experience cultures, food, and tradition like never before.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-8 px-6 py-3 ml-4 md:ml-10 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            Book Now!
          </button>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="text-center mt-32 py-10">
        <h1 className="text-black font-bold text-4xl md:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 md:px-20">
        {faqData.map((faq, index) => (
          <div key={index} className="border-t border-gray-300">
            <div
              className="flex justify-between items-center py-4 px-2 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="font-medium text-black text-lg">{faq.question}</h4>
              <span className="text-black">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {openIndex === index && (
              <div className="bg-white shadow-md rounded-md px-4 py-4 mx-2 mb-4 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;