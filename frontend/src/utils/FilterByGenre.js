export const FilterByGenre = (arr, genre) => {
  return arr.filter((film) => {
    const [firstGenre, secondGenre, thirdGenre] = film['movie_genre'].split('|');

    if (genre !== 'all') {
      if (firstGenre && secondGenre && thirdGenre) {
        return (
          firstGenre.toLowerCase() === genre ||
          secondGenre.toLowerCase() === genre ||
          thirdGenre.toLowerCase() === genre
        );
      } else if (firstGenre && secondGenre) {
        return (
          firstGenre.toLowerCase() === genre || secondGenre.toLowerCase() === genre
        );
      } else {
        return firstGenre.toLowerCase() === genre;
      }
    }
    return true;
  });
};
