import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroller from 'react-infinite-scroller';
import { AiOutlineArrowUp } from 'react-icons/ai';

import { apiBase } from '../../api/api';
import MovieCard from '../../components/common/MovieCard';
import Loader from '../../components/common/Loader';

export default function TopRated() {
  const [isVisibleScrollTop, setIsVisibleScrollTop] = useState(false);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useInfiniteQuery(
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

  useEffect(() => {
    const clickEventHandler = () => {
      if (window.innerHeight < window.scrollY) {
        setIsVisibleScrollTop(true);
      } else {
        setIsVisibleScrollTop(false);
      }
    };
    window.addEventListener('scroll', clickEventHandler);
  }, []);

  const onClickScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <h2>영화 순위</h2>
      <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
        <CardContinaer>
          {data.pages.map(page =>
            page.results.map(({ id, poster_path, title }) => (
              <MovieCard key={id} id={id} title={title} posterPath={poster_path} />
            ))
          )}
          {isFetching && <Loader />}
        </CardContinaer>
      </InfiniteScroller>
      <ScrollTopButton onClick={onClickScrollTop} isVisible={isVisibleScrollTop}>
        <AiOutlineArrowUp />
      </ScrollTopButton>
    </Container>
  );
}

const { REACT_APP_API_KEY } = process.env;
const initialUrl = `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=ko`;

const fetchMovies = async pageParam => {
  const { data } = await apiBase(pageParam);
  return data;
};

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  & h2 {
    margin-left: 5rem;
  }
`;
const CardContinaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
//todo: animation을 추가하면 좋을 듯 합니다.
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
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  cursor: pointer;
`;
