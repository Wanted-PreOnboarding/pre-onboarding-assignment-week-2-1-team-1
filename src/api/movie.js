import { apiBase } from './api';

import { useInfiniteQuery } from '@tanstack/react-query';

const { REACT_APP_API_KEY } = process.env;

const fetchMovies = async pageParam => {
  const { data } = await apiBase(pageParam);
  return data;
};

class Movie {
  getMovieList(url) {
    const initialUrl = `/movie/${url}?api_key=${REACT_APP_API_KEY}`;
    return useInfiniteQuery([url], ({ pageParam = initialUrl }) => fetchMovies(pageParam), {
      cacheTime: 3600,
      staleTime: 90,
      getNextPageParam: lastPage => {
        const { page, total_pages } = lastPage;
        if (page >= total_pages) return undefined;
        const nextUrl = initialUrl + `&page=${page + 1}`;
        return nextUrl;
      },
    });
  }
}

export default new Movie();
