import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroller from 'react-infinite-scroller';

import { apiBase } from '../../api/api';
import MovieCard from '../../components/common/MovieCard';
import { AiOutlineArrowUp } from 'react-icons/ai';

const { REACT_APP_API_KEY } = process.env;
const initialUrl = `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=ko`;
const fetchMovies = async pageParam => {
  const { data } = await apiBase(pageParam);
  return data;
};

export default function TopRated() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['movies'],
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
  if (!data) return <span>no data</span>;
  return (
    <Container>
      <h2>영화 순위</h2>
      <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
        <CardContinaer>
          {data.pages.map(page =>
            page.results.map(({ id, poster_path, title }) => (
              <MovieCard key={id} title={title} posterPath={poster_path} />
            ))
          )}
        </CardContinaer>
      </InfiniteScroller>
      <ScrollTopButton>
        <AiOutlineArrowUp />
      </ScrollTopButton>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  & h2 {
    margin-left: 5rem;
  }
`;
const CardContinaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ScrollTopButton = styled.div`
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: red;
  border-radius: 50%;
`;
