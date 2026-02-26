import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search photos by title, trip, or tag..."
      onChange={e => onSearch(e.target.value)}
      style={{
        width: '50%',
        padding: '0.5rem',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
