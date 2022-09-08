import React from 'react';
import styled from '@emotion/styled';
import InfiniteScroller from 'react-infinite-scroller';

import MovieCard from '../../components/common/MovieAdvancedCard';
import Loader from '../../components/common/Loader';
import ScorllTop from '../../components/ScrollTop';
import { Color } from '../../styles/common';
import Movie from '../../api/movie';

export default function TopRated() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    Movie.getMovieList('top_rated');

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <h2>영화 순위</h2>
      <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
        <CardContinaer>
          {data.pages.map(page =>
            page.results.map(movie => <MovieCard key={movie.id} movieInfo={movie} />)
          )}
          {isFetching && <Loader />}
        </CardContinaer>
      </InfiniteScroller>
      <ScorllTop />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  align-items: center;
  & h2 {
    margin: 0;
    margin-bottom: 10px;
    border: 2px solid ${Color.GRAY200};
    border-radius: 15px;
    padding: 2px 5px;
  }
`;
const CardContinaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0.5rem 0.5rem;
  }
`;
