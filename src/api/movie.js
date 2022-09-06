import { apiBase } from './api';

class Movie {
  getUpcomingMovie(pages) {
    const page = pages.queryKey[1];
    return apiBase.get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  }
}

export default new Movie();
