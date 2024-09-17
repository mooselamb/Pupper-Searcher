import React, { useState } from "react";
import axios from "axios";
import e from "express";

const login = ({ isAuthenticated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login"
      );
      isAuthenticated(true);
    } catch (error) {
      console.log("Unsucessful Login ૮ – ﻌ–ა", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <button type="submit">Login</button>
    </form>
  );
};

export default login;