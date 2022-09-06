import React, { useState } from 'react';

import Movie from '../../api/movie';
import { GET_POSTER } from '../../util/getPoster';

import { useQuery } from '@tanstack/react-query';

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [pages] = useState(1);

  useQuery(['upComingMovie', pages], Movie.getUpcomingMovie, {
    onSuccess: data => {
      setMovies(data.data.results);
    },
    onError: error => {
      console.error(error);
    },
  });

  return (
    <div>
      {movies.length &&
        movies.map(movie => (
          <div key={movie.id}>
            {movie.original_title}
            <img width="20px" src={GET_POSTER + movie.poster_path}></img>
            {movie.vote_average}
          </div>
        ))}
    </div>
  );
}

export default Upcoming;
