import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function MovieCard() {
  const navigator = useNavigate();

  return (
    <MovieCardContainer
      onClick={() => {
        navigator('/');
      }}
    >
      <div>
        <img src="" alt="" />
      </div>
      <p> 제목 </p>
    </MovieCardContainer>
  );
}

export default MovieCard;

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