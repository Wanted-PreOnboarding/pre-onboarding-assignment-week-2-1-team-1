import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Stars from './Starts';
import { useNavigate } from 'react-router-dom';
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
