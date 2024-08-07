// SearchPage.js

import React, { useState } from 'react';
import './SearchPage.css'; // Import the CSS file for styling

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form Google search URL
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    // Open Google search URL in a new tab
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="container mt-5">
      <div className="search-container">
        <h2 className="text-center mb-4">Search</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type your search query..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
