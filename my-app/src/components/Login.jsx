
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Login Success:', formData);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl px-6 sm:px-10 py-10 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Sign In</h1>
          <p className="text-sm text-gray-600">Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{' '}
              <Link to="/Register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
