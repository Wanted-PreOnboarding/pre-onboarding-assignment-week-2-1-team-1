/* eslint-disable */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// { poster_path, title, popularty }
function MovieCard() {
  const navigator = useNavigate();
  // const IMG_URL = `https://image.tmdb.org/t/p/w200`;

  return (
    <MovieCardContainer
      onClick={() => {
        navigator('/');
      }}
    >
      <div>
        <img src="" alt="" />
        {/* <img src={`${IMG_URL}/${poster_path}`}  alt='' /> */}
      </div>
      <p> 평점 </p>
      <p> 제목 </p>
    </MovieCardContainer>
  );
}

export default MovieCard;

const MovieCardContainer = styled.div`
  width: 200px;
  height: 350px;
  margin: 10px;
  overflow: hidden;

  & div {
    height: 250px;
    border-radius: 20px;
    background-color: #dddddd;

    & img {
      width: 100%;
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
