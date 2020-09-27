// MAIN COMPONENT //

import React, { useState, useEffect } from 'react';
import './styles/main.css';

// Components
import MovieItem from './components/MovieItem';
import SelectFilter from './components/SelectFilter';
import SelectGenre from './components/SelectMovieGenre';
import ForwardButton from './components/ForwardButton';
import ReverseButton from './components/ReverseButton';

// Functions from utils
import { FilterByName } from './utils/FilterByName';
import { FilterByGenre } from './utils/FilterByGenre';
import ShowNumOfPages from './components/ShowNumOfPages';

function Main() {
  // Constants
  const URL = '/movies';
  const FILMSPERPAGE = 6; // 55 movies in total, 9 pages max

  const [movieData, setMovieData] = useState([]);
  const [filter, setFilter] = useState('movie-title');
  const [genre, setGenre] = useState('all');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPage(0); // Reset page
  }, [genre]);

  useEffect(() => {
    fetch(URL)
      .then((x) => x.json())
      .then((data) => setMovieData(data));
    setLoading(false);
  }, [loading]);

  // As functionName(data, typeOfFilter)
  const filteredByGenreAndName = FilterByGenre(
    FilterByName(movieData, filter),
    genre
  );

  const filteredAndPaginated = filteredByGenreAndName.slice(
    page,
    page + FILMSPERPAGE
  );

  return (
    <>
      <h1 id="title">
        GENERIC MOVIE APP <i className="fas fa-film"></i>
      </h1>
      <div className="selections">
        <SelectFilter filter={filter} setFilter={setFilter} />
        <SelectGenre filter={genre} setFilter={setGenre} />
      </div>

      <main className="movie-list">
        {loading
          ? 'loading...'
          : filteredAndPaginated.map((movie) => (
              <MovieItem movieinformations={movie} key={movie.id} />
            ))}
      </main>
      <br />
      <br />
      <br />
      <footer className="footer">
        <ReverseButton
          filteredArr={filteredByGenreAndName}
          page={page}
          setPage={setPage}
          filmsPerPage={FILMSPERPAGE}
        />
        {filteredByGenreAndName.length > 6 && (
          <ShowNumOfPages page={page} filmsPerPage={FILMSPERPAGE} />
        )}
        <ForwardButton
          filteredArr={filteredByGenreAndName}
          page={page}
          filmsPerPage={FILMSPERPAGE}
          setPage={setPage}
        />
      </footer>
    </>
  );
}

export default Main;
