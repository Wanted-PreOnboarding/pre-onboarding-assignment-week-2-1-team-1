import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ movieInfo }) => {
  const navigator = useNavigate();
  const { adult, id, title, poster_path, popularity, release_date, vote_average, vote_count } =
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

      <section>
        <p>{title}</p>
        <StarsWrapper className="stars">
          <StartWrapper>
            <Starts src="/images/stars.png" alt="별점" />
          </StartWrapper>
          <GrayStars src="/images/grayStars.png" alt="별점" />
        </StarsWrapper>
        <span>평점{vote_average} </span>
        <span>투표참여인원{vote_count} </span>
        <span>popularity{popularity} </span>
        <br />
        <span>출시일{release_date} </span>
      </section>
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

const StarsWrapper = styled.div`
  position: relative;
`;

const StartWrapper = styled.div`
  z-index: 1000;
  width: 100px;
  height: 19px;
  overflow: hidden;
`;

const Starts = styled.img`
  position: relative;
  z-index: 10;
  height: 19px;
  width: 100px;
`;

const GrayStars = styled.img`
  position: absolute;
  top: 0;
  width: 100px;
  height: 19px;
`;
