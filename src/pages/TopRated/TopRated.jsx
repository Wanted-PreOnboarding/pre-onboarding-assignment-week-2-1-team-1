import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroller from 'react-infinite-scroller';

import { apiBase } from '../../api/api';
import MovieCard from '../../components/common/MovieCard';

const { REACT_APP_API_KEY } = process.env;
const initialUrl = `/movie/top_rated?api_key=${REACT_APP_API_KEY}`;
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
    <InfiniteScroller loadMore={fetchNextPage} hasMore={hasNextPage}>
      <Container>
        {data.pages.map(page =>
          page.results.map(({ id, poster_path, title }) => (
            <MovieCard key={id} title={title} posterPath={poster_path} />
          ))
        )}
      </Container>
    </InfiniteScroller>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0 0.5rem;
  }
`;

// <Container>
//   {movies.map(
//     ({
//       id,
//       poster_path,
//       adult,
//       overview,
//       release_date,
//       title,
//       popularity,
//       vote_count,
//       vote_average,
//     }) => (
//       <MovieCard
//         key={id}
//         id={id}
//         poster_path={poster_path}
//         adult={adult}
//         overview={overview}
//         release_date={release_date}
//         title={title}
//         popularity={popularity}
//         vote_count={vote_count}
//         vote_average={vote_average}
//       />
//     )
//   )}
// </Container>
