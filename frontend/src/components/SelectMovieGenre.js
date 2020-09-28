import React from 'react';

function FilterMovieGenre({ filter, setFilter }) {
  return (
  <>
    <label>Show </label>
    <select
      selected={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}>
        <option value="all">All</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="animation">Animation</option>
        <option value="children">Children</option>
        <option value="crime">Crime</option>
        <option value="comedy">Comedy</option>
        <option value="documentary">Documentary</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="film-noir">Film-Noir</option>
        <option value="horror">Horror</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="musical">Musical</option>
        <option value="mystery">Mystery</option>
        <option value="western">Western</option>
        <option value="romance">Romance</option>
        <option value="thriller">Thriller</option>
      </select>
  </>
  );
}

export default FilterMovieGenre;
