// NewsSearch.js

import React, { useState } from 'react';
import axios from 'axios';

const NewsSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http:localhost:3001/api/search', {
        params: {
          date: searchInput, // You can replace this with appropriate state values for title and page
        },
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching news:', error);
    }
  };

  return (
    <div>
      <h2>News Search</h2>
      <input
        type="text"
        placeholder="Enter date, title, or page"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((news, index) => (
              <li key={index}>
                <p>Title: {news.title}</p>
                <p>Article: {news.article}</p>
                {/* Add other relevant fields */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default NewsSearch;
