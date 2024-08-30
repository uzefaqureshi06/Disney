import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Papa = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch movies based on the search term
  const fetchMovies = async (query) => {
    try {
      const response = await axios.get
        //(`http://www.omdbapi.com/?s=${query}&apikey=c1b3adc6`);
      setMovies(response.data.Search || []); // Set an empty array if no movies are found
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Clear movies if there's an error
    }
  };

  // Fetch movies whenever the search term changes
  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm);
    } else {
      setMovies([]); // Clear movies if the search term is empty
    }
  }, [searchTerm]);

  return (
    <div style={{
      padding: '20px',
      backgroundImage: `url('https://helios-i.mashable.com/imagery/articles/05NMCbWPRfPIIbOBe7ZMXua/hero-image.fill.size_1248x702.v1623387457.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Ensure it covers the viewport height
    }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px', // Adjust width as needed
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background to improve readability
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <input
          type="search"
          placeholder="Search for Movies and Cartoons..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 40px 10px 10px', // Add padding for icon
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: 'absolute',
            right: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#007BFF', // Color of the icon
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
        {movies.length > 0 ? movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff', // Background color of the card
              overflow: 'hidden',
              height: '400px', // Fixed height for all cards
              position: 'relative', // Ensure title overlay works
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{
                width: '100%', // Full width of the card
                height: '300px', // Fixed height for images
                objectFit: 'cover', // Ensure image covers the area without stretching
                borderRadius: '8px', // Rounded corners for the image
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
              color: '#fff',
              padding: '10px',
              fontSize: '16px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600', // Bold text
            }}>
              {movie.Title}
            </div>
          </div>
        )) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Papa;
