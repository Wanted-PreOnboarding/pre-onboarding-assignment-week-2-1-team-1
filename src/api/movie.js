import { apiBase } from './api';

class Movie {
  async getUpcomingMovie() {
    const res = await apiBase.get(
      `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
    return res;
  }
}

export default new Movie();
