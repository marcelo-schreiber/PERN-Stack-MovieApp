import React from 'react';

function Movie({ movieinformations }) {
  const inf = movieinformations;
  return (
    <ul className="movie">
      <img src={inf.movie_image} alt={inf.movie_title} width="100px" />
      <li>{inf.movie_title}</li>
      <li>{inf.movie_genre}</li>
    </ul>
  );
}

export default Movie;
