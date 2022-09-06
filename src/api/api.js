import axios from 'axios';

export const apiBase = axios.create({ baseURL: 'https://api.themoviedb.org/3' });
