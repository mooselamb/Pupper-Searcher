import React, { useState, useEffect } from "react";
import axios from "axios";
import Favourites from "./Favourites";

const PupperSearch = () => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [favourites, setFavourites] = useState([]);
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

  const toggleFavourites = (dogId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(dogId)
        ? prevFavorites.filter((fav) => fav !== dogId)
        : [...prevFavorites, dogId]
    );
  };

  return (
    <div>
      <h1>Pupper Search</h1>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">All Breeds</option>
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
      <button onClick={searchDogs}>Search</button>

      <ul>
        {dogs.map((dogId) => (
          <li key={dog.id}>
            Dog ID: {dogId}{" "}
            <button onClick={() => toggleFavourites(dogId)}>
              {favourites.includes(dogId) ? "Remove from" : "Add to"} Favourites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PupperSearch;
