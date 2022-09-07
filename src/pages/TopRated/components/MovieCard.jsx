import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled';

//!: 현재 common/MovieCard의 참고용으로 남겨둠. 이후 삭제
export default function MovieCard({ poster_path, release_date, title, popularity, vote_average }) {
  const IMG_URL = `https://image.tmdb.org/t/p/w200`;

  return (
    <Container>
      <img src={`${IMG_URL}/${poster_path}`} alt="" />
      <Description>
        <Score>
          <span>{popularity}</span>
          <span>{vote_average}</span>
        </Score>
        <Title>{title}</Title>
        <span>release: {release_date}</span>
      </Description>
    </Container>
  );
}
MovieCard.propTypes = {
  id: PropType.number,
  poster_path: PropType.string,
  adult: PropType.bool,
  overview: PropType.string,
  release_date: PropType.string,
  title: PropType.string,
  popularity: PropType.number,
  vote_count: PropType.number,
  vote_average: PropType.number,
};

const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  & img {
    border-radius: 1rem;
  }
`;
const Description = styled.div`
  width: 100%;
`;
const Score = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h4`
  margin: 0; ;
`;
