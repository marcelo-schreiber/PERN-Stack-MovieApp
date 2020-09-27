import React from 'react';

function ForwardButton({ filteredArr, page, filmsPerPage, setPage }) {
  return (
    <button
      onClick={() => setPage((prev) => prev + filmsPerPage)}
      style={
        page / 5 < Math.ceil(filteredArr.length / filmsPerPage) - 1
          ? null
          : { opacity: 0, pointerEvents: 'none' }
      }>
      <b>&gt;</b>
    </button>
  );
}

export default ForwardButton;
