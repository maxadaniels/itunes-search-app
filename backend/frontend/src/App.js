import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent'; // Import the SearchComponent
import Header from './components/Header'; // Import the Header component
import Favorites from './components/Favourites'; // Import the Favorites component
import { Routes, Route } from "react-router-dom"; // Import routing components from react-router-dom

function App() {
  const [favorites, setFavorites] = useState([]); // Initialize state to store favorite items

  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Routes>
        {/* Define routes for different components */}
        <Route
          path="/" // The path for the root URL
          element={<SearchComponent setFavorites={setFavorites} />} 
          // Render the SearchComponent and pass a function to setFavorites as a prop
        />
        <Route
          path="/Favourites" // The path for the '/Favourites' URL
          element={<Favorites
            favorites={favorites}
            removeFavorite={(trackId) => setFavorites(favorites.filter((item) => item.trackId !== trackId))}
            // Render the Favorites component and pass favorites and a function to remove a favorite item as props
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
