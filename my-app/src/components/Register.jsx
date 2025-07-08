import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Registering:", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="bg-slate-300 py-10 w-full min-h-screen px-4 sm:px-0">
      <div className="w-full max-w-lg mx-auto mt-10 bg-white shadow-lg px-6 sm:px-10 py-10 sm:py-16 mb-16 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        {success && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            Registration successful!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-black mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-black mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-black mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 font-semibold rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
