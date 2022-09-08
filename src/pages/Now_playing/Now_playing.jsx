import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import MovieAdvancedCard from '../../components/common/MovieAdvancedCard';
import styled from '@emotion/styled';

import Movie from '../../api/movie';
import Loader from '../../components/common/Loader';
import { Header } from '../Upcoming/Upcoming';

const Now_playing = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    Movie.getMovieList('now_playing');

  if (isLoading) return <Loader />;
  return (
    <>
      <Header>
        <div>현재 상영작</div>
      </Header>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <Container>
          {data.pages.map(page =>
            page.results.map(movieInfo => (
              <MovieAdvancedCard key={movieInfo.id} movieInfo={movieInfo} />
            ))
          )}
          {isFetching && <Loader />}
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
