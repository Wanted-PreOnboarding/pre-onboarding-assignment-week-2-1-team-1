import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroller from 'react-infinite-scroller';

import { Color } from '../../styles/common';
import SurveySkeleton from '../../components/Skeleton';
import MovieCard from '../../components/common/MovieCard';

import { apiBase } from '../../api/api';
const { REACT_APP_API_KEY } = process.env;

const initialUrl = `/movie/popular?api_key=${REACT_APP_API_KEY}&language=ko-KR`;
const fetchMovie = async pageParam => {
  const { data } = await apiBase.get(pageParam);
  return data;
};

function List() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['popularMovie'],
    ({ pageParam = initialUrl }) => fetchMovie(pageParam),
    {
      cacheTime: 3600,
      staleTime: 90,
      getNextPageParam: lastPage => {
        const { page, total_pages } = lastPage;
        if (page >= total_pages) return undefined;

        const nextUrl = initialUrl + `&page=${page + 1}`;
        return nextUrl;
      },
    }
  );

  if (!data) return <div>no data</div>;
  if (isLoading)
    return <SurveySkeleton color={Color.GRAY200} width={95} wUnit="%" height={900} rounded />;
  return (
    <ListContainer>
      <div className="title-container">
        <p>현재 인기 있는 영화입니다!</p>
        <Link to="/top_rated"> 영화 순위도 보러가기 </Link>
      </div>

      <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
        <div className="card-container">
          {data.pages.map(page =>
            page.results.map(({ id, poster_path, title, vote_average }) => (
              <MovieCard key={id} title={title} posterPath={poster_path} grade={vote_average}/>
            ))
          )}
        </div>
      </InfiniteScroller>
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
