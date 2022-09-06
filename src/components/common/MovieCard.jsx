import React from 'react'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function MovieCard() {
  const navigator = useNavigate();

  return (
    <MovieCardContainer onClick={() => {navigator('/')}}>
      <div>hi</div>
    </MovieCardContainer>
  )
}

export default MovieCard;

const MovieCardContainer = styled.div`
  width: 200px;
  background-color: #000;
`