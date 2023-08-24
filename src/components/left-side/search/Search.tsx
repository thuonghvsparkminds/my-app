import React from 'react';
import './index.css';

const Search: React.FC = () => {
  return (
    <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="search-input" placeholder="Search"/>
        </div>
  );
}

export default Search;