import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MovieAdvancedCard from '../../components/common/MovieAdvancedCard';
import styled from '@emotion/styled';
import Movie from '../../api/movie';

import TopRatedLoader from '../TopRated/components/TopRatedLoader';

const Now_playing = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    Movie.getMovieList('now_playing');

  if (isLoading) return <TopRatedLoader />;
  return (
    <>
      <h2>현재 상영중인 영화</h2>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <Container>
          {data.pages.map(page =>
            page.results.map(movieInfo => (
              <MovieAdvancedCard key={movieInfo.id} movieInfo={movieInfo} />
            ))
          )}
          {isFetching && <TopRatedLoader />}
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
