import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import { GET_POSTER } from '../../util/getPoster';

function MovieCard({ id, title, posterPath }) {
  const navigator = useNavigate();

  return (
    <MovieCardContainer
      onClick={() => {
        navigator(`/movie/${id}`);
      }}
    >
      <div>
        <img src={`${GET_POSTER}/${posterPath}`} alt={`${title} 포스터`} />
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

export const MovieCardContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 5px;
  overflow: hidden;

  &.extended {
    height: 330px;
  }

  & div {
    width: 100%;
    height: 250px;
    border-radius: 20px;
    background-color: #dddddd;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(185, 185, 185, 0.8);

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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
