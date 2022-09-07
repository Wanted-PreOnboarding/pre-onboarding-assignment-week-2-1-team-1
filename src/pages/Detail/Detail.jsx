/* eslint-disable react/prop-types */
import React from 'react';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Card = ({ name, conuntry }) => {
  return (
    <CardStyle>
      <img src={`${process.env.PUBLIC_URL}/images/noImg.png`} alt="no-image" />
      <h1>{name}</h1>
      <span>({conuntry})</span>
    </CardStyle>
  );
};

function Detail() {
  const params = useParams();
  const IMG_URL = `https://image.tmdb.org/t/p/w200`;
  const initialUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`;
  const getMovieDetail = async () => {
    return fetch(initialUrl, {
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then(data => data);
  };

  const StarCount = average => {
    const count = (average / 2).toFixed(1);
    const int = Math.floor(count);
    const halfNumber = count - int;

    return {
      arr: Array.from({ length: int }, () => 0),
      half: halfNumber,
    };
  };

  const { isLoading, data } = useQuery(['movieDetail', Number(params.id)], getMovieDetail, {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 60 * 1000 * 60,
  });

  if (isLoading) {
    return <div>...loading</div>;
  }
  const Header = styled.section`
    border-bottom: 1px solid var(--primaryColor);
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${data.backdrop_path !== undefined
      ? `url(${IMG_URL}/${data.backdrop_path})`
      : null};

    & img {
      margin-right: 20px;
    }

    & h1 {
      margin: 0;
      margin-bottom: 10px;
    }
  `;
  return (
    <main>
      <Header className="header">
        <Warpper>
          <img src={`${IMG_URL}/${data.poster_path}`} alt={`${data.original_title} 포스터`} />
          <div>
            <h1>
              {data.title}({data.release_date.substring(0, 4)})
            </h1>
            <InfoMovie>
              <span className="relese">
                {data.release_date} ({data.production_countries[0].iso_3166_1})<br />
              </span>
              <span className="genres">
                {data.genres.map(item => item.name).join(', ')}
                <br />
              </span>
              <span className="run-time">
                {data.runtime}
                <span className="minute">(분)</span>
              </span>
            </InfoMovie>
            <Tagline>&quot;{data.tagline}&quot;</Tagline>
            <OverView>
              <h1>개요</h1>
              <span>{data.overview}</span>
            </OverView>
            <div>
              <h1>별점</h1>
              {StarCount(data.vote_average).arr.map((_, idx) => (
                <FaStar color="yellow" key={idx} />
              ))}
              {StarCount(data.vote_average).half >= 0.5 && <FaStarHalfAlt color="yellow" />}
            </div>
          </div>
        </Warpper>
      </Header>
      <ProductionContainer className="prodction">
        <div>
          <span className="title">출연진 & 제작진</span>
          <div className="production_container">
            {data.production_companies.map(item => (
              <Card key={item.id} name={item.name} conuntry={item.origin_country} />
            ))}
          </div>
        </div>
      </ProductionContainer>
    </main>
  );
}

export default Detail;

const InfoMovie = styled.div`
  margin-bottom: 20px;
  & span {
    position: relative;

    &::before {
      font-size: 1.1em;
      line-height: 1;
      content: '\\2022';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 7px;
      display: inline-flex;
      align-content: center;
      align-items: center;
      z-index: -1;
    }
  }

  & .minute {
    font-size: 0.7rem;
  }
`;

const OverView = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 20px;
`;

const Tagline = styled.div`
  font-style: italic;
  margin-bottom: 20px;
`;

const Warpper = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(31.5, 10.5, 10.5, 1) 150px,
    rgba(31.5, 10.5, 10.5, 0.84) 100%
  );
  padding: 30px 40px;
  display: flex;

  width: 100%;

  color: #fff;
`;

const ProductionContainer = styled.section`
  margin-top: 10px;
  width: 100%;
  & .title {
    font-weight: 700;
  }

  & .production_container {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

const CardStyle = styled.div`
  width: 120px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: auto;
  }

  & h1 {
    margin: 0;
    font-size: 0.8rem;
  }

  & span {
    font-size: 0.5rem;
  }
`;
