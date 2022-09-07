import { apiBase } from './api';

class Search {
  getSearchedMovies(title) {
    return apiBase.get(`/search/movie`, {
      params: { api_key: process.env.REACT_APP_API_KEY, query: title, language: 'ko-KR' },
    });
  }
}

export default new Search();
