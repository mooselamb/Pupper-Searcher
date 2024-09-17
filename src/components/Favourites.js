import React, { useState } from "react";
import axios from "axios";

const Favourites = ({ favourites }) => {
  const [Match, setMatch] = useState(null);

  const generateMatch = async () => {
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/dogs/match",
        favourites,
        {
          withCredentials: true,
        }
      );
      setMatch(response.data.match);
    } catch (error) {
      console.error("Couldn't fetch match ૮ – ﻌ–ა", error);
    }
  };

  return (
    <div>
      <h2>Your Favourite Doggos</h2>
      <ul>
        {favourites.map((dogId) => (
          <li key={dogId}>{dogId}</li>
        ))}
      </ul>
      <button onClick={generateMatch}>Generate Match</button>
      {Match && <div>Matched Doggo ID: {match}</div>}
    </div>
  );
};

export default Favourites;
