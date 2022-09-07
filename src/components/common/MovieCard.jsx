/* eslint-disable */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';

function MovieCard({ id, title, posterPath, grade }) {
  const navigator = useNavigate();
  const IMG_URL = `https://image.tmdb.org/t/p/w200`;

  const onClick = () => {
    navigator(`/movie/${id}`);
  };

  return (
    <MovieCardContainer onClick={onClick}>
      <div>
        <img src={`${IMG_URL}/${posterPath}`} alt={`${title} 포스터`} />
      </div>
      <p>{grade}점</p>
      <p>{title}</p>
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
  height: 350px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;

  & div {
    height: 250px;
    border-radius: 20px;
    background-color: #dddddd;
    overflow: hidden;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }
  & p:nth-of-type(1) {
    font-size: 14px;
  }
  & p {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin: 0;
    padding: 10px;
  }
`;
