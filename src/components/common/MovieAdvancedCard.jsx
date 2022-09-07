import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ movieInfo }) => {
  const navigator = useNavigate();
  const { adult, id, title, poster_path, popularity, release_data, vote_average, vote_count } =
    movieInfo;

  const forAdult = adult === true;

  return (
    <MovieCardContainer
      className="extended"
      forAdult={forAdult === true}
      onClick={() => {
        !forAdult && navigator(`/movie/${id}`);
      }}
    >
      <ImgWrapper>
        {forAdult && <Img19 src="/images/19.png" alt="19금 로고" />}
        <img className="movieImg" src={`${GET_POSTER}${poster_path}`} alt={`${title} 포스터`} />
      </ImgWrapper>

      <p>{title}</p>
      <span>평점{vote_average} </span>
      <span>투표참여인원{vote_count} </span>
      <span>popularity{popularity} </span>
      <span>release_data{release_data} </span>
    </MovieCardContainer>
  );
};

export default MovieAdvancedCard;

MovieAdvancedCard.propTypes = {
  movieInfo: PropType.object,
};

const ImgWrapper = styled.div`
  position: relative;

  & img.moiveImg {
    width: 100%;
    object-fit: cover;
    display: flex;
  }
`;

const Img19 = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: gray;
`;
