import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';

function MovieCard({ id, title, posterPath }) {
  const navigator = useNavigate();
  const IMG_URL = `https://image.tmdb.org/t/p/w200`;

  return (
    <MovieCardContainer
      onClick={() => {
        navigator(`/movie/${id}`);
      }}
    >
      <div>
        <img src={`${IMG_URL}/${posterPath}`} alt="" />
      </div>
      <p> {title} </p>
    </MovieCardContainer>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropType.number,
  posterPath: PropType.string,
  title: PropType.string,
};

const MovieCardContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 5px;
  overflow: hidden;

  & div {
    width: 100%;
    height: 250px;
    border-radius: 20px;
    background-color: #dddddd;

    & img {
      width: 100%;
    }
  }

  & p {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin: 0;
    padding: 5px;
  }
`;
