import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Stars from '../../../components/common/Starts';

import { GET_POSTER } from '../../../util/getPoster';
import { Color } from '../../../styles/common';

function ResultItem({ id, title, vote_average, release_date, overview, popularity, poster_path }) {
  const navigator = useNavigate();

  const onClick = () => {
    navigator(`/movie/${id}`);
  };

  return (
    <Container>
      <ImageWrapper onClick={onClick}>
        <Image
          src={
            poster_path !== null
              ? GET_POSTER + poster_path
              : 'https://cdn.discordapp.com/attachments/1014093591636877345/1017086779410624582/noImg.png'
          }
          alt={title}
        />
      </ImageWrapper>
      <DetailContainer>
        <H1 onClick={onClick}>{title}</H1>
        <Stars vote_average={vote_average} />
        <Span>
          👍{parseInt(popularity)} {release_date}
        </Span>
        <P>{overview}</P>
      </DetailContainer>
    </Container>
  );
}

ResultItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
};

export default ResultItem;

const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid ${Color.GRAY100};
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 91px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailContainer = styled.div`
  width: 750px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const H1 = styled.h1`
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 0%;
`;

const Span = styled.span`
  color: ${Color.GRAY200};
`;

const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
