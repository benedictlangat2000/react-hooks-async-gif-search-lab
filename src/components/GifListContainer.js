import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGifs('dolphin'); // Default query
  }, []);

  const fetchGifs = (query) => {
    const apiKey = 'dc6zaTOxFJmzC&rating=g'; // Replace with your actual Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
