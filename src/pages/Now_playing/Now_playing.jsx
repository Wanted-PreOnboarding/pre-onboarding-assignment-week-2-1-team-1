import React, { useState } from 'react';
import Movie from '../../api/movie';
import { GET_POSTER } from '../../util/getPoster';

import { useQuery } from '@tanstack/react-query';
const Now_playing = () => {
  const [movies, setMovies] = useState([]);
  const [pages] = useState(1);

  useQuery(['upComingMovie', pages], Movie.getNow_playingMovie, {
    onSuccess: data => {
      setMovies(data.data.results);
    },
    onError: error => {
      console.error(error);
    },
  });

  return (
    <div>
      <h2>현재 상영중인 영화</h2>
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
};

export default Now_playing;
