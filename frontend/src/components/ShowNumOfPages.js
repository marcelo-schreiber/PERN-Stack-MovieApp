import React from 'react';

function ShowNumOfPages({ page, filmsPerPage }) {
  return (
    <>
      You're on page&nbsp;<b>{Math.ceil((page + 0.01) / filmsPerPage)}</b>
    </>
  );
}

export default ShowNumOfPages;
