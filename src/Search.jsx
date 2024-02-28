// SearchBar.js
import React from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
