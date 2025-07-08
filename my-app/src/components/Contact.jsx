import React from "react";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="/Contact.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="text-white text-xl md:text-2xl font-semibold">
            Get in Touch
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Phone */}
        <div className="space-y-3">
          <FaPhone className="mx-auto text-3xl text-blue-600" />
          <p className="text-xl font-bold">Phone</p>
          <p className="text-gray-600">
            A wonderful serenity has taken possession of <br />
            my entire soul, like these sweet mornings.
          </p>
          <p className="text-blue-800 font-semibold">+1-2345-2345</p>
        </div>

        {/* Email */}
        <div className="space-y-3">
          <CiMail className="mx-auto text-4xl text-green-600" />
          <p className="text-xl font-bold">Email</p>
          <p className="text-gray-600">
            A wonderful serenity has taken possession of <br />
            my entire soul, like these sweet mornings.
          </p>
          <p className="text-blue-800 font-semibold">
            contact@traveltourtheme.co
          </p>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <FaLocationDot className="mx-auto text-3xl text-red-600" />
          <p className="text-xl font-bold">Location</p>
          <p className="text-gray-600">
            4 Apt. Flawing Street, The Grand Avenue <br />
            Liverpool, UK 33342
          </p>
          <p className="text-blue-800 font-semibold cursor-pointer hover:underline">
            View on Google Map
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 px-4 py-20 text-center">
        <form className="max-w-xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Leave us your info
          </h1>
          <p className="text-gray-600 mb-4">
            and we will get back to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject*"
            className="p-3 border border-gray-300 rounded w-full"
            required
          />

          <textarea
            rows="5"
            placeholder="Message*"
            className="p-3 border border-gray-300 rounded w-full"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white w-full font-semibold rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160980003!2d72.74109770817389!3d19.08219783920264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b079401b7%3A0xd3b3d5086aef1186!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-none md:rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
