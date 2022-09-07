import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import InfiniteScroller from 'react-infinite-scroller';
import { Color } from '../../styles/common';
import MovieCard from '../../components/common/MovieCard';

// import axios from 'axios';
import { apiBase } from '../../api/api';
const { REACT_APP_API_KEY } = process.env;

function List() {
  /* eslint-disable */
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   apiBase.get(`/movie/popular?api_key=${REACT_APP_API_KEY}&language=ko`).then((res) => {
  //     // console.log(res.data.results);
  //     setMovie
  //   })
  // }, [])

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await apiBase.get(`/movie/popular?api_key=${REACT_APP_API_KEY}&language=ko`);
        setMovie(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovie();
  }, []);

  return (
    <ListContainer>
      <div className="title-container">
        <p>현재 인기 있는 영화입니다!</p>
        <Link to="/top_rated"> 영화 순위도 보러가기 </Link>
      </div>

      <div className="card-container">
        <MovieCard />
      </div>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div`
  width: 100%;

  & div.title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    margin: 30px 0;
    padding: 0 10px;
    border-left: 5px solid ${Color.BLUE200};

    & p {
      font-size: 18px;
      font-weight: 700;
    }

    & a {
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      color: ${Color.BLUE200};
    }
  }

  & div.card-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: center;
  }
`;
