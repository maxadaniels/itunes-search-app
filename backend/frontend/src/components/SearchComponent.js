// Import React, useState for managing component state, axios for making API requests, and the CSS file for styling
import React, { useState } from 'react';
import axios from 'axios';
import './SearchComponent.css';

// SearchComponent receives 'setFavorites' as a prop for managing favorite items
function SearchComponent({ setFavorites }) {
  // Define component state variables
  const [searchTerm, setSearchTerm] = useState('');
  const [media, setMedia] = useState('all'); // Default to searching all media types
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search when the "Search" button is clicked
  const handleSearch = async () => {
    try {
      // Make an API request to search iTunes based on the selected media and search term
      const response = await axios.get(`/search?media=${media}&q=${searchTerm}`);
      
      // Modify the release date for each result to display only the first 10 characters
      const modifiedResults = response.data.results.map((result) => ({
        ...result,
        releaseDate: result.releaseDate.slice(0, 10),
        isFavorite: false, // Add a flag to track if an item is a favorite
      }));

      // Update the search results state with the modified results
      setSearchResults(modifiedResults);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to toggle the favorite status of an item
  const toggleFavorite = (trackId) => {
    // Find the item in search results by trackId
    const updatedResults = searchResults.map((result) => {
      if (result.trackId === trackId) {
        return {
          ...result,
          isFavorite: !result.isFavorite, // Toggle the favorite status
        };
      }
      return result;
    });

    // Update search results and add/remove from favorites accordingly
    setSearchResults(updatedResults);
    const itemToAddOrRemove = updatedResults.find((result) => result.trackId === trackId);
    if (itemToAddOrRemove) {
      if (itemToAddOrRemove.isFavorite) {
        setFavorites((prevFavorites) => [...prevFavorites, itemToAddOrRemove]); // Add to favorites
      } else {
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item.trackId !== trackId)); // Remove from favorites
      }
    }
  };

  return (
    <div className="search-container">
      {/* Search input and button */}
      <div className="search-input">
        <input
          type="text"
          placeholder="Search iTunes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Media type selector */}
      <div className="media-type-selector">
        <label htmlFor="media">Select Media Type:</label>
        <select
          id="media"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        >
          {/* Options for selecting media type */}
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="musicVideo">Music Video</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">Ebook</option>
        </select>
      </div>

      {/* Display search results in a table */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Release Date</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through search results and display each result */}
          {searchResults.map((result) => (
            <tr key={result.trackId}>
              <td>{result.trackName}</td>
              <td>{result.artistName}</td>
              <td>{result.releaseDate}</td>
              <td>
                {/* Button to add or remove from favorites */}
                <button className="favorites-button" onClick={() => toggleFavorite(result.trackId)}>
                  {result.isFavorite ? 'Remove' : 'Add'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchComponent;
