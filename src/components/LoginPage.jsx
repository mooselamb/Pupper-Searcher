import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://frontend-take-home-service.fetch.com/auth/login',
        formData,
        { withCredentials: true }
      );
      login();
    } catch (error) {
      console.error('Login failed ૮ ˘ﻌ˘ ა :', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Fetch Dogs!</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
