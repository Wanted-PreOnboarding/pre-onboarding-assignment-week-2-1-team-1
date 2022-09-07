/* eslint-disable */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import { GET_POSTER } from '../../util/getPoster';

function MovieCard({ id, title, posterPath, grade }) {
  const navigator = useNavigate();

  const onClick = () => {
    navigator(`/movie/${id}`);
  };

  return (
    <MovieCardContainer onClick={onClick}>
      <div>
        <img
          src={posterPath === null ? 'images/empty-poster.png' : `${GET_POSTER}${posterPath}`}
          alt={`${title} 포스터`}
        />
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
  ${props =>
    props.forAdult &&
    css`
      cursor: not-allowed;
    `}
  & > div {
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(185, 185, 185, 0.8);
    & > div > img {
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.extended {
    height: 360px;
  }
`;
