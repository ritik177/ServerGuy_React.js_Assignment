


import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, addSearchHistory } from '../store';

import { IoSearch } from "react-icons/io5"; 


export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(setQuery(e.target.value));
      dispatch(addSearchHistory({ query: e.target.value, time: new Date() }));
    }
  };

  return (
    <div className="search-input-container search-bar">
    <span className="search-icon">< IoSearch /></span>
      <input type="text" placeholder="Search stories by title, author, or URL" className='search-input' onKeyPress={handleSearch} />
      
    </div>
  );
}
