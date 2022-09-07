import React from 'react';

import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroller from 'react-infinite-scroller';

import { apiBase } from '../../api/api';
import MovieCard from '../../components/common/MovieCard';
import SurveySkeleton from '../../components/Skeleton';
import { Color } from '../../styles/common';

const { REACT_APP_API_KEY } = process.env;
const initialUrl = `/movie/upcoming?api_key=${REACT_APP_API_KEY}`;
const fetchMovies = async pageParam => {
  const { data } = await apiBase(pageParam);
  return data;
};

function Upcoming() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['upComingMovie'],
    ({ pageParam = initialUrl }) => fetchMovies(pageParam),
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

  if (isLoading)
    return <SurveySkeleton color={Color.GRAY200} width={95} wUnit="%" height={900} rounded />;
  return (
    <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
      <Container>
        {data.pages.map(page =>
          page.results.map(({ id, poster_path, title }) => (
            <MovieCard id={id} key={id} title={title} posterPath={poster_path} />
          ))
        )}
      </Container>
    </InfiniteScroller>
  );
}

export default Upcoming;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0.5rem 0.5rem;
  }
`;
