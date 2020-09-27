import React from 'react';

function FilterMovie({ filter, setFilter }) {
  return (
    <select
      selected={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}>
      <option value="movie-title">Movie title</option>
      <option value="movie-genre">Movie genre</option>
      <option value="date-added">Date added</option>
    </select>
  );
}

export default FilterMovie;
