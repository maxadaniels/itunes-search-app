// Import React, the CSS file for styling, and Link from react-router-dom for navigation
import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

// Header component contains navigation links and a title
function Header() {
  return (
    <header className="header">
      {/* Navigation links */}
      <nav>
        <Link to="/"> {/* Link to the home page */}
          <button>Home</button> {/* Button to navigate to the home page */}
        </Link>
      </nav>
      <h1>ITUNES SEARCH</h1> {/* Title of the application */}
      <nav>
        <Link to="/Favourites"> {/* Link to the favorites page */}
          <button>Favorites</button> {/* Button to navigate to the favorites page */}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
