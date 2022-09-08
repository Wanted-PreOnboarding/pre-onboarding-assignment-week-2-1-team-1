import React from 'react';

import styled from '@emotion/styled';
import InfiniteScroller from 'react-infinite-scroller';
import { BiCameraMovie } from 'react-icons/bi';

import Movie from '../../api/movie';
import MovieAdvancedCard from '../../components/common/MovieAdvancedCard';
import { Color } from '../../styles/common';
import Loader from '../../components/common/Loader';

function Upcoming() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    Movie.getMovieList('upcoming');

  if (isLoading) return <Loader />;

  return (
    <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
      <Header>
        <div>
          <BiCameraMovie /> 아직 개봉하지않은 영화
        </div>
      </Header>
      <Container>
        {data.pages.map(page =>
          page.results.map(movieInfo => (
            <MovieAdvancedCard key={movieInfo.id} movieInfo={movieInfo} />
          ))
        )}
        {isFetching && <Loader />}
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

const Header = styled.header`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: center;
  margin-bottom: 10px;

  div {
    border: 2px solid ${Color.GRAY200};
    border-radius: 15px;
    padding: 2px 5px;
  }
`;
