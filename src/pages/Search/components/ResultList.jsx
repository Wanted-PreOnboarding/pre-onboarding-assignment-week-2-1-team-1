import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import ResultItem from './ResultItem';

function ResultList({ movies, fetchNextPage, hasNextPage, isLoading, isError, error }) {
  if (!movies) return <p>영화를 검색해주세요.</p>;
  if (isLoading) return <p>로딩 중 입니다.</p>;
  if (isError) return <p>Error {error.toString()}</p>;

  // 여기서 movies 로그 찍어보면 무한으로 fetch 하려고함...
  // console.log(movies);

  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {movies.pages.map(page => {
        return page.data.results.map(movie => (
          <ResultItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            overview={movie.overview}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
          />
        ));
      })}
    </InfiniteScroll>
  );
}

ResultList.propTypes = {
  movies: PropTypes.object,
  fetchNextPage: PropTypes.func,
  hasNextPage: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.string,
};

export default ResultList;
