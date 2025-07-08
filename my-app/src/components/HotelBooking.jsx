
import React, { useState } from "react";

const HotelBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Deluxe",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-300 py-10 px-4">
      <div className="max-w-[550px] mx-auto h-30 bg-white p-10 rounded-xl shadow-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Hotel Booking Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm font-semibold mb-1">Check-In</label>
              <input
                type="date"
                name="checkIn"
                className="p-2 border border-gray-300 rounded"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm font-semibold mb-1">Check-Out</label>
              <input
                type="date"
                name="checkOut"
                className="p-2 border border-gray-300 rounded"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm font-semibold mb-1">Guests</label>
              <input
                type="number"
                name="guests"
                className="p-2 border border-gray-300 rounded"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm font-semibold mb-1">Room Type</label>
              <select
                name="roomType"
                className="p-2 border border-gray-300 rounded"
                value={formData.roomType}
                onChange={handleChange}
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="Presidential">Presidential</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelBookingForm;
