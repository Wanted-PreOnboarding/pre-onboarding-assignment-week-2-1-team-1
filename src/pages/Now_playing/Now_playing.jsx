import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MovieAdvancedCard from '../../components/common/MovieAdvancedCard';
import styled from '@emotion/styled';
import Movie from '../../api/movie';
import SurveySkeleton from '../../components/Skeleton';
import { Color } from '../../styles/common';

const Now_playing = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = Movie.getMovieList('upcoming');

  console.info(data);
  if (isLoading)
    return <SurveySkeleton color={Color.GRAY200} width={95} wUnit="%" height={900} rounded />;
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
