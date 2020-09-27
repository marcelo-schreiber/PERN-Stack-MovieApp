/* eslint-disable no-redeclare */
export const FilterByName = (arr, filter) => {
  return arr.slice().sort((a, b) => {
    if (filter === 'movie-genre') {
      var A = a['movie_genre'];
      var B = b['movie_genre'];
    } else if (filter === 'movie-title') {
      var A = a['movie_title'];
      var B = b['movie_title'];
    } else {
      var A = a['id'];
      var B = b['id'];
    }
    return A < B ? -1 : A > B ? 1 : 0;
  });
};
