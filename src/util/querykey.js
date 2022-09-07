const keyNames = {
  movie: 'movie',
  search: 'search',
};

const queryKey = {
  nowPlaying: () => [keyNames.movie, 'now-playing'],
  upcoming: () => [keyNames.movie, 'upcoming'],
  topRated: () => [keyNames.movie, 'top-rated'],
  movieDetail: () => [keyNames.movie, 'detail'],
  search: title => [keyNames.search, title],
  searchDetail: title => [keyNames.search, 'detail', title],
};

export default queryKey;
