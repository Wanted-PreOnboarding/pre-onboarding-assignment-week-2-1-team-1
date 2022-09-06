import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { apiBase } from '../../api/api';
import MovieCard from './components/MovieCard';

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await apiBase(`/movie/top_rated?api_key=${REACT_APP_API_KEY}`);
      const { results } = data;

      setMovies(results);
    };

    fetchMovies();
  }, []);
  return (
    <Container>
      {movies.map(
        ({
          id,
          poster_path,
          adult,
          overview,
          release_date,
          title,
          popularity,
          vote_count,
          vote_average,
        }) => (
          <MovieCard
            key={id}
            id={id}
            poster_path={poster_path}
            adult={adult}
            overview={overview}
            release_date={release_date}
            title={title}
            popularity={popularity}
            vote_count={vote_count}
            vote_average={vote_average}
          />
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0 0.5rem;
  }
`;
