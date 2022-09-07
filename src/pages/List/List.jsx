import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import InfiniteScroller from 'react-infinite-scroller';

import { Color } from '../../styles/common';
import MovieAdvancedCard from '../../components/common/MovieAdvancedCard';
import Movie from '../../api/movie';
import Loader from '../../components/common/Loader';

function List() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    Movie.getMovieList('popular');

  if (isLoading) return <Loader />;
    
  return (
    <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
      <ListContainer>
        <div className="title-container">
          <p>현재 인기 있는 영화입니다!</p>
          <Link to="/top_rated"> 영화 순위도 보러가기 </Link>
        </div>

          <div className="card-container">
            {data.pages.map(page =>
              page.results.map(movieInfo => (
                <MovieAdvancedCard key={movieInfo.id} movieInfo={movieInfo} />
              ))
            )}
          </div>
          {isFetching && <Loader />}
      </ListContainer>
    </InfiniteScroller>
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
