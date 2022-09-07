import React from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { apiBase } from '../../api/api';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from '../../components/common/MovieCard';
import styled from 'styled-components';

const { REACT_APP_API_KEY } = process.env;
const initialUrl = `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=ko-KR`;
const fetchMovieList = async pageParam => {
  const { data } = await apiBase.get(pageParam);
  return data;
};

const Now_playing = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['now_playing'],
    ({ pageParam = initialUrl }) => fetchMovieList(pageParam),
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

  // useQuery(['upComingMovie', pages], Movie.getNow_playingMovie, {
  //   onSuccess: data => {
  //     console.info(data.data.results);
  //     setMovies(data.data.results);
  //   },
  //   onError: error => {
  //     console.error(error);
  //   },
  // });
  console.info(data);
  if (!data) return <div>no data</div>;
  return (
    <>
      <h2>현재 상영중인 영화</h2>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <Container>
          {data.pages.map(page =>
            page.results.map(({ id, poster_path, title }) => (
              <MovieCard key={id} title={title} posterPath={poster_path} />
            ))
          )}
        </Container>
      </InfiniteScroll>
    </>
  );
};

export default Now_playing;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0 0.5rem;
  }
`;
