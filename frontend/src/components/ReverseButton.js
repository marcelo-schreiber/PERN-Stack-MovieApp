import React from 'react';

function ReverseButton({ filteredArr, page, setPage, filmsPerPage }) {
  return (
    <button
      onClick={() => setPage((prev) => prev - filmsPerPage)}
      style={
        filteredArr.length > 0 && page > 0
          ? null
          : {
              opacity: 0,
              pointerEvents: 'none',
            }
      }>
      <b>&lt;</b>
    </button>
  );
}

export default ReverseButton;
