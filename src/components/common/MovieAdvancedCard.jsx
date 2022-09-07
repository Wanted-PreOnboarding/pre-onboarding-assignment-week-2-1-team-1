import React from 'react';
import styled from '@emotion/styled';
import Stars from './Starts';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ movieInfo }) => {
  const navigator = useNavigate();
  const { adult, id, title, poster_path, release_date, vote_average } = movieInfo;

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

      <section>
        <p>{title}</p>
        <RatingBox>
          <Stars vote_average={vote_average} />
          <Rate>평점 {vote_average} </Rate>
        </RatingBox>
        <Release>출시일: {release_date} </Release>
      </section>
    </MovieCardContainer>
  );
};

export default MovieAdvancedCard;

MovieAdvancedCard.propTypes = {
  movieInfo: PropType.object,
};

const RatingBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const Rate = styled.span`
  font-size: 14px;
`;

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

const Release = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 5px;
`;
