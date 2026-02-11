// src/components/CitySearch.jsx

import React, { useState } from 'react';

const CitySearch = ({ allLocations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Searech for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li key={suggestion}>{suggestion}</li>;
          })}
          <li key="See sll cities">
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
//============ I am not sure that this function goes here or in this file==========
const handleInputChanged = (event) => {
  const value = event.target.value;
  const filteredLocations = allLocations
    ? allLocations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      })
    : [];
  setQuery(value);
  setSuggestions(filteredLocations);
};

export default CitySearch;
