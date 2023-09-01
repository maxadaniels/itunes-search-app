// Import React and the CSS file for styling
import React from 'react';
import './Favourites.css';

// Favorites component receives 'favorites' (an array of favorite items) and 'removeFavorite' (a function to remove favorites) as props
function Favorites({ favorites, removeFavorite }) {
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {/* Create a table to display favorite items */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the 'favorites' array to display each favorite item */}
          {favorites.map((result) => (
            <tr key={result.trackId}>
              <td>{result.trackName}</td>
              <td>{result.artistName}</td>
              <td>{result.releaseDate}</td>
              <td>
                {/* Button to remove the favorite item when clicked */}
                <button
                  onClick={() => removeFavorite(result.trackId)}
                  className="remove-button" // Add a class for styling
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;
