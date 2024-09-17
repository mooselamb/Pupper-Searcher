import React, { useState, useEffect } from "react";
import axios from "axios";

const PupperSearch = () => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get(
          "https://frontend-take-home-service.fetch.com/dogs/breeds",
          { withCredentials: true }
        );
        setBreeds(response.data);
      } catch (error) {
        console.log("Couldn't fetch breeds ૮ – ﻌ–ა", error);
      }
    };
    fetchBreeds();
  }, []);

  const searchDogs = async () => {
    try {
      const response = await axios.get(
        `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${selectedBreed}&sort=breed:${sortOrder}`,
        { withCredentials: true }
      );
      setDogs(response.data.resultIds);
    } catch (error) {
      console.log("Couldn't fetch dogs ૮ – ﻌ–ა", error);
    }
  };

  return (
    <div>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
        {" "}
        Sort:{sort === "asc" ? "Ascending" : "Descending"}
      </button>
      
    </div>
  );
};
