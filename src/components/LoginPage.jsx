import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        formData,
        { withCredentials: true }
      );
      login();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-transform duration-200 hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-warm-dark">
          Welcome to Pupper Searcher!
        </h2>
        <div className="mb-4">
          <label className="block mb-1 text-warm-dark">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-warm-dark px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-warm-dark"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-warm-dark">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-warm-dark px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-warm-dark"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded shadow-lg transform transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
