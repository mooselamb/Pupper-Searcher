import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PupperCard from './PupperCard';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SearchPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogs, setDogs] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [favorites, setFavorites] = useState([]);
  const [pagination, setPagination] = useState({ next: null, prev: null });

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await axios.get(
          'https://frontend-take-home-service.fetch.com/dogs/breeds',
          { withCredentials: true }
        );
        setBreeds(res.data);
      } catch (error) {
        console.error('Error fetching breeds ૮ ˘ﻌ˘ ა :', error);
      }
    };

    fetchBreeds();
  }, []);

  const fetchDogs = async (query = '') => {
    try {
      const res = await axios.get(
        `https://frontend-take-home-service.fetch.com/dogs/search${query}`,
        { withCredentials: true }
      );
      const dogIds = res.data.resultIds;
      setPagination({ next: res.data.next, prev: res.data.prev });

      const dogsRes = await axios.post(
        'https://frontend-take-home-service.fetch.com/dogs',
        dogIds,
        { withCredentials: true }
      );
      setDogs(dogsRes.data);
    } catch (error) {
      console.error('Error fetching dogs ૮ ˘ﻌ˘ ა :', error);
    }
  };

  useEffect(() => {
    let query = `?sort=breed:${sortOrder}`;
    if (selectedBreed) {
      query += `&breeds=${selectedBreed}`;
    }
    fetchDogs(query);
  }, [selectedBreed, sortOrder]);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const toggleFavorite = (dogId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(dogId)
        ? prevFavorites.filter((id) => id !== dogId)
        : [...prevFavorites, dogId]
    );
  };

  const generateMatch = async () => {
    try {
      const res = await axios.post(
        'https://frontend-take-home-service.fetch.com/dogs/match',
        favorites,
        { withCredentials: true }
      );
      alert(`Your match is dog with ID: ${res.data.match}`);
    } catch (error) {
      console.error('Error generating match ૮ ˘ﻌ˘ ა :', error);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <FormControl variant="outlined" className="w-1/3">
          <InputLabel>Breed</InputLabel>
          <Select value={selectedBreed} onChange={handleBreedChange} label="Breed">
            <MenuItem value="">
              <em>All Breeds</em>
            </MenuItem>
            {breeds.map((breed) => (
              <MenuItem value={breed} key={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>

        <button
          onClick={generateMatch}
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={favorites.length === 0}
        >
          Generate Match
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <PupperCard
            key={dog.id}
            dog={dog}
            isFavorite={favorites.includes(dog.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => fetchDogs(pagination.prev)}
          disabled={!pagination.prev}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => fetchDogs(pagination.next)}
          disabled={!pagination.next}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPage;