import React from 'react';
import styled from '@emotion/styled';
import Stars from './Starts';
import { useNavigate } from 'react-router-dom';
import { MovieCardContainer } from './MovieCard';
import { GET_POSTER } from '../../util/getPoster';
import PropType from 'prop-types';

const MovieAdvancedCard = ({ movieInfo }) => {
  const navigator = useNavigate();
  const { adult, id, title, poster_path, release_date, vote_average, overview } = movieInfo;

  const forAdult = adult === true;

  const trimTexter = trimText => {
    if (!trimText) return '내용이 없습니다.';
    if (trimText.length > 116) {
      trimText = trimText.slice(0, 116);
      return trimText + '...';
    }
    return trimText;
  };

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

        <div></div>
        <span>{trimTexter(overview)}</span>

        <img
          className="movieImg"
          src={poster_path === null ? 'images/empty-poster.png' : `${GET_POSTER}${poster_path}`}
          alt={`${title} 포스터`}
        />
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

  &:hover {
    & span {
      display: flex;
    }
    & > div {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  & img.moiveImg {
    width: 100%;
    object-fit: cover;
    display: flex;
  }

  & > span {
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #fff;
    width: 210px;
    height: 250px;
    padding: 40px;
    overflow: hidden;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
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
