import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ isSearchActive, setIsSearchActive }) => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  return (
    <div className={`search-container ${isSearchActive ? 'expanded' : ''}`} onClick={() => setIsSearchActive(true)}>
      {!isSearchActive && <span className="search-placeholder">Search Jobs</span>}
      {isSearchActive && (
        <div className="search-expanded">
          <Form.Control type="text" placeholder="Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Form.Control type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;